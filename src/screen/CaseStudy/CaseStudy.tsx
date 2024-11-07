import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CaseStudy = () => {
    const params = useParams();

    const data: Record<string, { title: string; desc: string; imgs: string[] }> = {
        goodSpace: { 
            title: "Goodspace AI", 
            desc: "Goodspace AI streamlines recruitment with AI-driven tools for instant feedback, efficient screening, and seamless interview scheduling, making hiring faster and improving candidate experiences.", 
            imgs: [
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_2_hl4ypj.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_3_gpaufm.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_4_jftolf.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_5_wxg6jp.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_7_yezaht.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_8_wvm1jb.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977429/Slide_16_9_-_9_tdr0ut.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977429/Slide_16_9_-_9-1_ttntz6.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977430/Slide_16_9_-_10_ddxnzc.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977430/Slide_16_9_-_10-1_tm8qnv.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977429/Slide_16_9_-_11_shaj26.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_12_qcf7l1.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977427/Slide_16_9_-_13_kzdgor.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_14_nwfxqh.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977428/Slide_16_9_-_15_kjgp7q.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977429/Slide_16_9_-_16_v9x83d.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977429/Slide_16_9_-_17_p1ifpe.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977429/Slide_16_9_-_18_eqs0xr.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977430/Slide_16_9_-_20_fqrwgf.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977430/Slide_16_9_-_21_klwtty.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977430/Slide_16_9_-_22_vdld9f.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730977430/Slide_16_9_-_23_g6zzv4.png"
            ] 
        },
        veda: {
            title: "Veda Smriti",
            desc: "Veda Smriti is a modern app that simplifies ancient Vedic wisdom, offering personalized guidance, mantras, rituals, and spiritual teachings to help users explore and integrate Vedic knowledge into their daily lives.",
            imgs: [
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979516/Slide_16_9_-_1_dkogfa.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979512/Slide_16_9_-_2_nltnv2.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979512/Slide_16_9_-_3_idcjsl.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979512/Slide_16_9_-_4_llbdel.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979513/Slide_16_9_-_5_qrc5og.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979513/Slide_16_9_-_6_igv9rs.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979517/Slide_16_9_-_7_o1rvoq.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979514/Slide_16_9_-_8_ml77ot.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979514/Slide_16_9_-_9_lvyuio.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979515/Slide_16_9_-_10_h3aqpk.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979519/Slide_16_9_-_11_xlwce4.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979519/Slide_16_9_-_12_qoodwu.png",
                "https://res.cloudinary.com/db4cbtzey/image/upload/v1730979519/Slide_16_9_-_13_ohlini.png"
            ]
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
