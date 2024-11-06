import { useParams } from 'react-router-dom';

const CaseStudy = () => {
    const params = useParams();

    const data: Record<string, { title: string; desc: string; imgs: string[] }> = {
        goodSpace: { title: "Goodspace AI", desc: "Goodspace AI streamlines recruitment with AI-driven tools for instant feedback, efficient screening, and seamless interview scheduling, making hiring faster and improving candidate experiences.", imgs: [] },

    };

    if(params.name && data[params.name] !== undefined) {
        return (
            <div className='container py-8 px-1 flex flex-col gap-6'>
                <h2 className='text-[#FAFAFA] font-bold text-4xl'>{data[params?.name].title}</h2>
                <div className='text-[#A1A1AA]'>{data[params?.name].desc}</div>
                { data[params?.name].imgs.map((a: string) => (
                    <img src={a} />
                ))}
                <div>Lets discuss the upcoming big sensation!</div>
                <div className='bg-screenWhite w-fit text-[#09090B] font-bold text-base px-5 py-2 rounded-full flex gap-2 items-center'>Hit me up, let’s vibe</div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='text-[#A1A1AA]'>This case study is</div>
            <div className='w-[80%] h-[50vh] flex flex-col mx-auto justify-evenly items-center'>
                <div className='text-3xl'>Coming</div>
                <div className='text-8xl'>Superrrrrrrrrrrrrrrr</div>
                <div className='text-3xl'>soon</div>
            </div>
        </div>
    )
}

export default CaseStudy;