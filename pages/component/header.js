import Link from "next/link";
import './header.css';

function Header (){
    return(
        <div>
            <h1>Zuardina</h1>

            <Link href="/contatos">
                <a>Contato</a>
            </Link>
        </div>
    )
}

export default Header;