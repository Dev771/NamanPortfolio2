import Profile from './img/profile.webp.png';
import collage from './img/collage.png';

const About = () => {
    return (
        <div className="container">
            <img src={Profile} />
            <div className='py-6 px-1 md:w-[70%] flex flex-col gap-3'>
                <span className='text-[#FAFAFA]'>Hey, welcome to my digital abode. Nice to meet you!</span>
                <div className='text-[#A1A1AA]'>
                    Hey there! I'm Naman Bhateja, a passionate UX/UI designer with over a year of experience crafting seamless digital experiences across web, mobile, and AI-driven platforms.
                    <br />
                    <br />
                    Fuelled by a personal drive for creating intuitive solutions, I specialize in designing user-centric interfaces that not only solve problems but also enhance the joy of everyday interactions.
                    <br />
                    <br />
                    Outside of work, you'll find me exploring new recipes in the kitchen 🧑‍🍳, baking delicious treats 🍪, getting lost in a great book 📖, experimenting with paint 🎨, lifting weights 🏋️, or indulging in a binge-worthy series or movie (especially cartoons!) 🎥. Oh, and I can never resist window-shopping for sneakers.
                </div>
            </div>
            <div className='flex flex-col gap-3 md:w-[80%] py-4 px-1'>
                <h3 className='text-white text-4xl font-semibold'>Photo Dump</h3>
                <div className='text-[#808080]'>
                    Here are some photos I captured with love 😤 and I’m excited to share them with you!
                </div>
            </div>
            <img src={collage} />
        </div>
    )
}

export default About;