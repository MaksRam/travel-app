import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEarth } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faEarth} />

export default function Header() {
    return (
        <div className="header">
            <p>{element} my travel journal</p>
        </div>
    )
}