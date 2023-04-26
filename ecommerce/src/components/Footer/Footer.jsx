import {Link} from 'react-router-dom';
import style from './Footer.module.css'
import image from '../NavBar/img/Diseno_sin_titulo-removebg-preview.png'

const Footer= ()=>{
    return(
    <footer className={style.divFooter}>
        <div className={style.grupo1}>
            <div>
                <figure className={style.figure}>
                    <img src={image} alt="Logo" className={style.img}/>
                </figure>
            </div>
        
         
            <div className={style.box}>
                <h2 className={style.h2}>Categorias</h2>
                <Link to='/' className={style.link}>Electronics</Link>
                <Link to='/' className={style.link}>Jewelery</Link>
                <Link to='/' className={style.link}>Men's clothing</Link>
                <Link to='/' className={style.link}>Women's clothing</Link>
            </div>
        

            

            <div className={style.box}>
                <h2 className={style.h2}>Contactos</h2>
                <a href='https://github.com/Lucas52352' target="_blank" rel="noopener noreferrer" className={style.link}>Lucas Rius</a>
                <a href='https://github.com/Manuel-latorre' target="_blank" rel="noopener noreferrer" className={style.link}>Manuel Latorre</a>
                <a href='https://github.com/julianrodriguez2728' target="_blank" rel="noopener noreferrer" className={style.link}>Julian Rodriguez</a>
                <a href='https://github.com/Nacho731' target="_blank" rel="noopener noreferrer" className={style.link}>Ignacio Gallardo</a>
                <a href='https://github.com/nehuencisneros' target="_blank" rel="noopener noreferrer" className={style.link}>Nehuen Cisneros</a>
                <a href='https://github.com/GuillerminaDiaz' target="_blank" rel="noopener noreferrer" className={style.link}>Guillermina Diaz</a>
            </div>
       
    
        </div>
    </footer>
    )
}

export default Footer;