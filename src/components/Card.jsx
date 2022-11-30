import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faLocationDot} />

export default function Card(props) {
    return (
        <><div className="card">
            <div className='image'><img src={`../images/${props.img}`} alt="fuji" width={125} height={168} /></div>
            <div className='location'>{icon} {props.location} <a href='http://google.com'>View on Google Maps</a></div>
            <div className='place'>{props.place}</div>
            <div className='date'>{props.date}</div>
            <div className='description'>{props.description}</div>

        </div><br /></>
    )
}