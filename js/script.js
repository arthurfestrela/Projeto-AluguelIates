document.addEventListener("DOMContentLoaded",function(){
  if(document.querySelector("#formContato")){
    var f=document.querySelector("#formContato");
    f.addEventListener("submit",function(e){
      e.preventDefault();
      var nome=document.querySelector("#nome").value.trim();
      var email=document.querySelector("#email").value.trim();
      var mensagem=document.querySelector("#mensagem").value.trim();
      if(!nome||!email||!mensagem){document.querySelector("#status").textContent="Preencha todos os campos";return}
      var obj={nome:nome,email:email,mensagem:mensagem};
      inserirMensagem(obj);
      document.querySelector("#status").textContent="Mensagem enviada com sucesso!";
      f.reset();
    });
  }
  if(document.querySelector("#formLogin")){
    var l=document.querySelector("#formLogin");
    l.addEventListener("submit",function(e){
      e.preventDefault();
      var email=document.querySelector("#loginEmail").value.trim();
      var senha=document.querySelector("#loginSenha").value;
      var obj={email:email,senha:senha};
      if(validarUsuario(obj)){window.location.href="mensagens.html"}else{document.querySelector("#loginStatus").textContent="E-mail e Senha inválidos"}
    });
  }
  if(document.querySelector("#tabelaMensagens")){
    function render(){
      var msgs=obterMensagens()||[];
      var tbody=document.querySelector("#tabelaMensagens tbody");
      tbody.innerHTML="";
      if(msgs.length===0){var tr0=document.createElement("tr");var td0=document.createElement("td");td0.colSpan=4;td0.style.textAlign="center";td0.textContent="Nenhuma mensagem";tr0.appendChild(td0);tbody.appendChild(tr0);return}
      msgs.forEach(function(m){
        var tr=document.createElement("tr");
        tr.dataset.id=m.id;
        tr.style.fontWeight=m.visualizada? "normal":"bold";
        var td1=document.createElement("td");td1.textContent=m.nome;
        var td2=document.createElement("td");td2.textContent=m.email;
        var td3=document.createElement("td");td3.textContent=m.mensagem;
        var td4=document.createElement("td");
        var btnV=document.createElement("button");btnV.textContent="Visualizada";
        btnV.addEventListener("click",function(){
          if(confirm("Marcar como visualizada?")){marcarVisualizada(m.id);render()}
        });
        var btnE=document.createElement("button");btnE.textContent="Excluir";
        btnE.style.marginLeft="8px";
        btnE.addEventListener("click",function(){
          if(confirm("Deseja realmente excluir esta mensagem?")){excluirMensagem(m.id);render()}
        });
        td4.appendChild(btnV);td4.appendChild(btnE);
        tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);
        tbody.appendChild(tr);
      });
    }
    render();
    setInterval(render,2000);
  }
});
