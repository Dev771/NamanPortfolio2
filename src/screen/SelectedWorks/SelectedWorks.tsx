import styles from './SelectedWorks.module.scss';

import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import image4 from './img/image4.png';
import image5 from './img/image5.png';
import image6 from './img/image6.png';
import image7 from './img/image7.png';
import image8 from './img/image8.png';
import image9 from './img/image9.png';
import image10 from './img/image10.png';
import { Link } from 'react-router-dom';

const SelectedWorks = () => {

    const data = [
        { img: image1, link: "" },
        { img: image2, link: "" },
        { img: image3, link: "" },
        { img: image4, link: "" },
        { img: image5, link: "" },
        { img: image6, link: "" },
        { img: image7, link: "" },
        { img: image8, link: "" },
        { img: image9, link: "" },
        { img: image10, link: "" },
    ]

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.card} data-type="Info">
                <h1 className='text-3xl font-bold text-white'>Selected Work</h1>
                <div className='text-xl'>
                    Showcasing my work that reflects my journey as a self-taught designer.
                </div>
            </div>
            { data.map((card) => (
                <Link to={card.link} key={card.img} className={styles.card} data-type='card' style={{ background: `url(${card.img})` }}></Link>
            ))}
        </div>
    )
}

export default SelectedWorks