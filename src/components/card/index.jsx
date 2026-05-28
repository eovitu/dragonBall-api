import './style.css'
import freezaKuririn from '../../assets/freeza-kuririn.jpg'

export const Card = ({ title = 'Freeza', description = 'Freeza matando Kuririn' }) => {
  return (
    <div className="card">
      <img src={freezaKuririn} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}