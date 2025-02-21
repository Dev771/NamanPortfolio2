import styles from './styles.module.scss'

import KLOUDRAC from '../../../assets/svg/KLOUDRAC.svg';
import GOODSPACE from '../../../assets/svg/GOODSPACE.svg';
import BVICAM from '../../../assets/svg/BVICAM.svg';
import Behance from '../../../assets/svg/Behance.svg';
import Medium from '../../../assets/svg/Medium.svg';
import LinkedIn from '../../../assets/svg/LinkedIn.svg';
import Download from '../../../assets/svg/Download.svg';
import { Link } from 'react-router-dom';
import TimeConverter from '../../../utils/TimeConverter';

const HeroSection = () => {

    const socials = [
        { icon: Behance, link: "https://www.behance.net/namanbhateja", name: "Behance" },
        { icon: Medium, link: "https://medium.com/@namanbhatejadesign", name: "Medium" },
        { icon: LinkedIn, link: "https://www.linkedin.com/in/namanbhateja0808/", name: "LinkedIn" }
    ]

    return (
        <div className={styles.hero}>
            <div>
                <p className='text-xs'><TimeConverter inputTime={new Date()} /> local time</p>
                <h2 className='text-3xl font-bold my-5'>Hello, I'm Naman Bhateja</h2>
                <div className='text-offWhite text-lg w-[65%]'>Your friendly neighbourhood product designer based in Delhi, India. I enjoy crafting exceptional digital interfaces that offer delightful and intuitive experiences. </div>
                <div className='mt-11 text-sm'>I have worked with</div>
                <div className={`flex gap-4 ${styles.companies}`}>
                    <img src={KLOUDRAC} />
                    <img src={GOODSPACE} />
                    <img src={BVICAM} />
                </div>
                <div className='flex gap-5 items-center my-8'>
                    <Link to="https://drive.google.com/file/d/1hrdcc1A6IyWxyq43FtkoQqebtV02CAsp/view?usp=sharing" className='bg-screenWhite text-[#09090B] font-bold text-base px-5 py-2 rounded-full flex gap-2 items-center'>Resume <img src={Download} alt='download' /></Link>
                    { socials.map((a) => (
                        <Link to={a.link} target='_blank' title={a.name} className='bg-[#27272A] aspect-square w-[40px] flex justify-center items-center rounded-full p-2'><img src={a.icon} alt={a.name} /></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection