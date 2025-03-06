import styles from './Projects.module.scss'

import goodSpace from '../../../assets/Goodspace.png';
import veda from '../../../assets/Veda.png';
import goodSpaceInterview from '../../../assets/GoodSpaceInterview.png';
import GreenGenie from '../../../assets/GreenGenie.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    const Projects = [
        { img: goodSpace, lok: "goodSpace", name: "Goodspace: Find work hire talent", desc: "Goodspace AI streamlines recruitment with AI-driven tools for instant feedback, efficient screening, and seamless interview scheduling, making hiring faster and improving candidate experiences." },
        { img: veda, lok: "veda", name: "Veda Smriti: World Vedic Wisdom", desc: "Bring ancient Vedic wisdom to your fingertips, offering personalized spiritual guidance, mantras, meditation, and rituals for holistic growth." },
        { img: goodSpaceInterview, lok: "goodSpaceInterview", name: "Goodspace : Auto Interview", desc: "An AI-powered interviewer that conducts structured interviews consistently, assessing both technical and soft skills objectively.", link: "https://medium.com/design-bootcamp/revolutionizing-ai-job-interviews-with-goodspace-e52384c89b9e" },
        { img: GreenGenie, lok: "GreenGenie", name: "Green Genie", desc: "Green Genie aims to provide a convenient and reliable service that delivers high-quality, fresh, and exotic fruits and vegetables straight to your doorsteps." },
    ]

    return (
        <div>
            <h1 className='text-4xl font-bold mb-5 max-md:p-3'>Projects</h1>
            <div>
                { Projects.map((project) => (
                    <div className='flex flex-col gap-7 mb-12' key={project.name}>
                        <img src={project.img} alt={project.name} />
                        <div className={`${styles.desc} flex justify-between items-center text-lg`}>
                            <div>
                                <h3 className='text-screenWhite'>{project.name}</h3>
                                <div className='text-offWhite mr-9'>{project.desc}</div>
                            </div>
                            <Link to={project.link ? project.link : `case-study/${project.lok}`} target='_blank' className={`${styles.button} bg-screenWhite text-[#09090B] flex font-bold text-base rounded-full text-nowrap items-center gap-1`}>
                                <div className={styles.text}>Visit Site</div> 
                                <div className={styles.sign}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 20 20" fill="none">
                                        <path d="M13.3501 7.83339L6.16673 15.0167L4.9834 13.8334L12.1667 6.65006H5.85007V4.98339H15.0167V14.1501H13.3501V7.83339Z" fill="#09090B"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects