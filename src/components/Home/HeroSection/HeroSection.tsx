import styles from './styles.module.scss'

import KLOUDRAC from '../../../assets/svg/KLOUDRAC.svg';
import GOODSPACE from '../../../assets/svg/GOODSPACE.svg';
import BVICAM from '../../../assets/svg/BVICAM.svg';
import Instagram from '../../../assets/svg/instagram.svg';
import Twitter from '../../../assets/svg/Twitter.svg';
import LinkedIn from '../../../assets/svg/LinkedIn.svg';
import Download from '../../../assets/svg/Download.svg';
import { Link } from 'react-router-dom';

const HeroSection = () => {

    const socials = [
        { icon: Instagram, link: "", name: "Instagram" },
        { icon: Twitter, link: "", name: "Twitter" },
        { icon: LinkedIn, link: "", name: "LinkedIn" }
    ]

    return (
        <div className={styles.hero}>
            <div>
                <p className='text-xs'>2:06 PM local time</p>
                <h2 className='text-3xl font-bold my-5'>Hello, I'm Naman Bhateja</h2>
                <div className='text-offWhite text-lg w-[65%]'>Your friendly neighbourhood product designer based in Delhi, India. I enjoy crafting exceptional digital interfaces that offer delightful and intuitive experiences. </div>
                <div className='mt-11 text-sm'>I have worked with</div>
                <div className={`flex gap-4 ${styles.companies}`}>
                    <img src={KLOUDRAC} />
                    <img src={GOODSPACE} />
                    <img src={BVICAM} />
                </div>
                <div className='flex gap-5 items-center my-8'>
                    <Link to="https://drive.google.com/file/d/1ONHdiYOZcOzMsJme4tpQlN5XJku-B6_A/view?usp=sharing" className='bg-screenWhite text-[#09090B] font-bold text-base px-5 py-2 rounded-full flex gap-2 items-center'>Resume <img src={Download} alt='download' /></Link>
                    { socials.map((a) => (
                        <Link to={a.link} className='bg-[#27272A] aspect-square w-[40px] flex justify-center items-center rounded-full p-2'><img src={a.icon} alt={a.name} /></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection