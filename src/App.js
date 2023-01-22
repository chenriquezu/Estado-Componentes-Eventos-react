import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './Components/Boton';


function App() {
  const [user,setNombre]= useState('');
  const [pass,setPass] = useState('');
  const [mensaje,setMensaje] =useState('');
  const [desplegar,setDesplegar]= useState(false);

    const handleSubmit =(e)=>{
    e.preventDefault();
    setDesplegar(true);
    if (user ==="ADL" && pass ==="252525"){
        setMensaje('los datos son correctos')
    }else{
        setMensaje('los datos son incorrectos  ')
    }
  };

  return (
    <div className="App container w-50">

       <div>
         <h1 className = 'text-center'>Autentificación Componentes</h1>
       </div>
       {desplegar && <div class="alert alert-primary" role="alert">
                          {mensaje}
                      </div>}
       <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor='name'>Nombre</label>
              <input type='text'
                      id='name' 
                      defaultValue = {user} 
                      onChange={(e)=> {
                            setNombre(e.target.value);
                      }}
                      className='form-control' >
              </input>
          </div>
          
          <div>
              <label htmlFor='password'>password</label>
              <input type = 'password' 
                     id='password' 
                     defaultValue = {pass}  
                     onChange={(e)=>{
                           setPass(e.target.value);
                     }}
                     className='form-control'>
              </input>
          </div>
          
          <div className='mt-3 text-center'>
              {user.length > 0 && pass.length > 0 && <Boton texto = "Iniciar Sessión"/>}
                  
          </div>
      </form>
    </div>
  );
}

export default App;
