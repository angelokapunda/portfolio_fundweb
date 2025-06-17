const sobre = document.querySelector("#about");

const formulario = document.querySelector("#formulario");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
    try {

        const dadosPerfil = await fetch(`https://api.github.com/users/angelokapunda`);

        const perfil = await dadosPerfil.json();

        let  conteudo = `
             <img src="${perfil.avatar_url}" alt="Foto do perfil do Github - ${perfil.name}" />

            <article id="about_texto">
                <h1>Sobre mim</h1>
                <p>Olá! Meu nome é Angelo dos Santos, sou desenvolvedor Java Fullstack apaixonado por tecnologia e por resolver problemas com código.
                    Comecei minha jornada na programação com curiosidade e logo percebi que construir soluções digitais era o que eu queria fazer da vida.

                    Atualmente estudo e desenvolvo projetos com HTML, CSS, JavaScript,React, Java e Spring Boot, buscando sempre evoluir minhas habilidades técnicas e entender cada vez mais sobre boas práticas e arquitetura de software.

                    Sou uma pessoa proativa, dedicada e com muita vontade de aprender. Gosto de trabalhar em equipe, compartilhar conhecimento e encarar desafios como oportunidades de crescimento.

                    Meu objetivo agora é conquistar minha primeira oportunidade profissional como desenvolvedor ou colaborar em projetos reais, onde eu possa aplicar e expandir meus conhecimentos.
                    </p>
                    <p> <strong> Aprendizado constante e a ideia de que ninguém nasce sênior — mas todo sênior já foi júnior como eu. </strong> </p>

                <div id="about_github" class="flex sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">Github</a>
                    <p>${perfil.followers} seguidores</p>
                    <p>${perfil.public_repos} repositórios</p>
                </div>
            </article>
        `;

        sobre.innerHTML += conteudo;

    } catch(error){
        console.error(error);
    }
    
} 

formulario.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3) {
        txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres!";
        campoNome.focus();
        return
    } else {
        txtNome.innerHTML = ""
    }

    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = "Digite um E-mail Válido!";
        campoEmail.focus();
        return
    } else {
        txtEmail.innerHTML = ""
    }

    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if(campoAssunto.value.length < 5) {
        txtAssunto.innerHTML = "O Assunto deve ter no mínimo 5 caracteres!";
        campoAssunto.focus();
        return
    } else {
        txtAssunto.innerHTML = ""
    }

    formulario.submit();

});


getApiGithub();
