import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit() {
    const form = {
      nome,
      email,
      telefone,
      mensagem,
    };
    console.log("Formulário  a ser enviado:", form);
    // console.log(`Formulario a ser enviado: ${form}`)
  }
  return (
    <>
      <div className="titulo-bg">
        <div className="titulo container">
          <p className="font-2-l-b cor-5">Respostas em até 24h</p>
          <h1 className="font-1-xxl cor-0">
            nosso contato<span className="cor-p1">.</span>
          </h1>
        </div>
      </div>

      <div className="contato container">
        <section className="contato-dados" aria-label="Endereço">
          <h2 className="font-1-m cor-0">Loja Online</h2>
          <div className="contato-endereco font-2-s cor-4">
            <p>Rua Ali Perto, 35</p>
            <p>Rio de Janeiro - RJ</p>
            <p>Brasil - Terra - Vita Láctea</p>
          </div>
          <address className="contato-meios pad20 font-2-s cor-4">
            <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
            <a href="mailto:assistencia@bikcraft.com">
              assistencia@bikcraft.com
            </a>
            <a href="tel:+552199999999">+55 21 9999-9999</a>
          </address>
          <div className="contato-redes">
            <a>
              <img
                src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg"
                alt="Instagram"
              ></img>
            </a>
            <a>
              <img
                src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg"
                alt="Facebook"
              ></img>
            </a>
            <a>
              <img
                src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg"
                alt="Youtube"
              ></img>
            </a>
          </div>
        </section>

        <section className="contato-formulario" aria-label="Formulário">
          <form className="form" action="./contato.html">
            <div>
              <fieldset>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                ></input>
              </fieldset>
              <fieldset>
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  placeholder="(21) 9999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                ></input>
              </fieldset>
              <fieldset className="col-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="contato@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </fieldset>
              <fieldset className="col-2">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  rows="5"
                  id="mensagem"
                  name="mensagem"
                  placeholder="O que você precisa?"
                ></textarea>
              </fieldset>
            </div>
            <button className="botao col-2" onClick={() => handleSubmit()}>
              Enviar Mensagem
            </button>
          </form>
        </section>
      </div>

    </>
  );
}
export default Contact;
