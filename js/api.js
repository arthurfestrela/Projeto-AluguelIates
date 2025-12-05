var __STORAGE_KEY = "luxo_mensagens_v1";
function __ler(){var r=localStorage.getItem(__STORAGE_KEY);return r?JSON.parse(r):[]}
function __gravar(a){localStorage.setItem(__STORAGE_KEY,JSON.stringify(a))}
function inserirMensagem(obj){var a=__ler();var item={id:Date.now(),nome:obj.nome||"",email:obj.email||"",mensagem:obj.mensagem||"",visualizada:false};a.push(item);__gravar(a);return true}
function obterMensagens(){return __ler()}
function validarUsuario(obj){return obj&&obj.email==="admin@admin.com"&&obj.senha==="1234"}
function excluirMensagem(id){var a=__ler();a=a.filter(function(m){return m.id!==id});__gravar(a);return true}
function marcarVisualizada(id){var a=__ler();var i=a.findIndex(function(m){return m.id===id});if(i!==-1){a[i].visualizada=true;__gravar(a);return true}return false}
window.inserirMensagem=inserirMensagem
window.obterMensagens=obterMensagens
window.validarUsuario=validarUsuario
window.excluirMensagem=excluirMensagem
window.marcarVisualizada=marcarVisualizada
