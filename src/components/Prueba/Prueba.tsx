import './Prueba.css'
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';


const PruebaComponente = () => {
  return (
   
  <div className='MASGRANDE'>
    <div className="BIGCOMPONENT">
      <div className="TEXTO">
      <Textarea name="Solid" placeholder="Nombre de la tarea" variant="soft" sx={{height:20}}/>
      </div>

      <div className="DESCRIPCIONcuadro"> 
          <div className='Descripcion'>
          <Textarea name="Solid" placeholder="Escribe tu tarea e mierda" variant="soft" sx={{height:122}}/>
          </div>

          <div className='Fechas'>
          <div className='INICIO'>
          <h3>FECHA DE INICIO:</h3>  
          <h3>DAY/DATE/YEAR</h3>
          </div>
          <div className='FINAL'>
          <h3>FECHA LIMITE: </h3>
          <h3>DAY/DATE/YEAR</h3>
          </div>
          </div>
      </div>

      <div className='SELECTORFECHA'>
      </div>
      
      <div className='GUARDAR'>
      <Button variant="solid">Guardar tarea e mierda</Button>
      </div>

    </div>
    </div> 
  );
};

export default PruebaComponente;

