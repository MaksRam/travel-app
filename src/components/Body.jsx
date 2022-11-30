import './Body.css'
import Header from './Header'
import Card from './Card'

import data from '../data'

export default function Body() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                location={item.location}
                place={item.place}
                date={item.date}
                description={item.description}
            />
        )
    })
    return (
        
        <div className="body">
            <Header />
            <br />
            <br />
            <br />
            <br />
            {cards}
        </div>
    )
}