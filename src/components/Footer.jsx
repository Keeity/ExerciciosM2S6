import './Footer.css'

function Footer () {
    return (
    <header>
        <div className="footerClass">
            <img className="imagem" src= "https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"></img>
      
         <div className="divContato">
           <h3> CONTATO</h3>
            <ul className="contato">
             <a><li> +55 21 9999-9999 </li></a>
             <a> <li> contato@bikcraft.com </li></a>
             <li> Rua Ali Perto, 42 - Botafogo </li>
             <li> Rio de Janeiro </li>
            </ul>
            <div className="footer-redes">
          <a> 
            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg" alt="Instagram"></img>
          </a>
          <a>
            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg" alt="Facebook"></img>
          </a>
          <a>
            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg" alt="Youtube"></img>
          </a>
        </div>
      
           </div>
     
           <div className="divInformacoes">
           <h3> INFORMAÇOES</h3>
            <ul className="informacoes">
             <a><li> Bicicletas </li></a>
             <a> <li> Seguros </li></a>
             <a><li> Contato </li></a>
             <a><li> Termos e condiçoes </li></a>
            </ul>
           </div>
         <p className="footer-copy">Bikcraft © Alguns direitos reservados.</p>       
            </div>
    </header>
    
    )
    }
    export default Footer
    