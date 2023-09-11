import useClima from '../hooks/useClima'

const Resultado = () => {

    const { resultado } = useClima()

    const { name, main } = resultado

    console.log(resultado)

    //conversion a grados kelvin
    const kelvin = 273.15

  return (
    <div className='contenedor clima'>
       {name}:
       <p>
          {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
       </p>
       <p>
         Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
       </p>
       <p>
         Máx: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
       </p>
    </div>
  )
}

export default Resultado