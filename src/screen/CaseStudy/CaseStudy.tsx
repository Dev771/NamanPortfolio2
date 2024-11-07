import { useParams } from "react-router-dom";

const CaseStudy = () => {
    const params = useParams();

    const data: Record<string, { title: string; desc: string; imgs: string[] }> = {
        goodSpace: { 
            title: "Goodspace AI", 
            desc: "Goodspace AI streamlines recruitment with AI-driven tools for instant feedback, efficient screening, and seamless interview scheduling, making hiring faster and improving candidate experiences.", 
            imgs: [
                "https://drive.google.com/file/d/1zWi21XuVdGvjxaZd6ZvlXTOpslRta6gn/view?usp=sharing","https://drive.google.com/file/d/1fMSa6xloXR_KPPqCvZeBS_BGN2in1eup/view?usp=sharing",
                "https://drive.google.com/file/d/1regMlOe-8T3KA7IIkRvzxLI8-Ehuqp2E/view?usp=sharing","https://drive.google.com/file/d/1jtvsywmWSTGsMC-3ba4TN9wP7oCSK6y6/view?usp=sharing",
                "https://drive.google.com/file/d/19QjIusKSFtKP1LJmQHQDf2Gs65IAEH9t/view?usp=sharing","https://drive.google.com/file/d/16n1YAwafSpOO8y_MPJber3TjNWf0DMqJ/view?usp=sharing",
                "https://drive.google.com/file/d/1wu-7jwo3FynVZtnTNwN2VNbbOBkrKXiz/view?usp=sharing","https://drive.google.com/file/d/1WxMp9taaXbFv4LSopiTqceHony8pzjCz/view?usp=sharing",
                "https://drive.google.com/file/d/1dTnoYf5qZzSL3zexIs-ZHDsEDSI_RABB/view?usp=sharing","https://drive.google.com/file/d/1gc7K9z1nPCoQFODnV-vzeUI8lDXcH1Ws/view?usp=sharing",
                "https://drive.google.com/file/d/11Oblf1HjhBvZI6MDDFZcfay2e8my-9v2/view?usp=sharing","https://drive.google.com/file/d/1XYeSigCx90dJr4ZNQXs7oysLGeoDTEKX/view?usp=sharing",
                "https://drive.google.com/file/d/12KH-sm_j-uz0Q8cVrY54OKkKGzImEX9I/view?usp=sharing","https://drive.google.com/file/d/1GDDO0UGftfNO2ktq26TgYJ9YrPxIk1O6/view?usp=sharing",
                "https://drive.google.com/file/d/1KR3TEp8vl7ZLzzPnoa6XkEFh7WNn1m92/view?usp=sharing","https://drive.google.com/file/d/1IMq-lUs3psDgoH7n7IjDPlNvntbqybmh/view?usp=sharing",
                "https://drive.google.com/file/d/1hpS2SFF1iFA7kMccYcIXNVsS3U-O9eoC/view?usp=sharing","https://drive.google.com/file/d/1YR9_xdYv1FwlgtamLpmoeQzAmqQFqjCc/view?usp=sharing",
                "https://drive.google.com/file/d/1w6eLywnLWkirS4hwwAmrt4Q4-6fxRfGi/view?usp=sharing","https://drive.google.com/file/d/1Wi8ryuERfhg5MKXjuvePvy-O4dpIGQkw/view?usp=sharing",
                "https://drive.google.com/file/d/1s42GI0kHf1-IzT_U1w7-rfL43RG84mUp/view?usp=sharing"
            ] 
        },
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
