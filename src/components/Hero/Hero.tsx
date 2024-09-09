import Button from '@mui/material/Button';
import ImageHero from '../../assets/img/image__hero.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__texto">
                <div className="hero__texto-titulo">
                    <h2 className='titulo-primero'>Organiza, prioriza y</h2>
                    <h2 className='titulo-segundo'>Completa tus tareas</h2>
                    <h2 className='titulo-tercero'>Nunca habia sido tan facil hacer seguimiento a tus tareas</h2>
                </div>
                <div className="hero__texto-button">
                    <Button  variant="contained" style={{backgroundColor:"#232360",textTransform:"capitalize"}}>Register</Button>
                </div>
            </div>
            <div className="hero__imagen">
                <img className='hero__imagen-img' src={ImageHero} alt="" />
            </div>
        </div>
    )
}

export default Hero;