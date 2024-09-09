import Card from '../CardInfo/CardInfo'
import './CardsInfo.css'

const CardsInfo = () => {
    return (
        <div className="cards">
            <Card key={1} title="Intuitiva y fácil de usar" text="Nuestra aplicación está diseñada para que cualquiera pueda comenzar a usarla inmediatamente, sin necesidad de capacitación."/>
            <Card key={2} title="Interfaz limpia y sencilla" text="Navega por tus tareas de forma rápida y eficiente con nuestra interfaz."/>
            <Card key={3} title="Aumento de la productividad" text="Al tener un plan claro, trabajarás de manera más eficiente y podrás completar más tareas en menos tiempo."/>
        </div>
    )
}

export default CardsInfo;