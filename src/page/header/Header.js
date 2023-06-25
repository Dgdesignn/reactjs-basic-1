import logoImg from '../../logo.svg'
import './header.css'

export default function Header(){
    return(
        <header className='header'>
            <div className="logo">
                <img src={logoImg} className='img-logo'/>
                <h2>ReactFacts</h2>
            </div>

            <nav className='menu'>
                <h3>React Course - </h3>
                <h4>Project 1</h4>
            </nav>
        </header>
    )
}