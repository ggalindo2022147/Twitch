import logo from '../assets/img/EscudoPeque (1).svg'

export const Logo = ({text}) => {
  return (
    <div className='auth-form-logo-container'>
        <img src={logo} alt="Escudo"/>
        <span>{text}</span>
    </div>
  )
}
