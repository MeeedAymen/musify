
import { useParams } from "react-router-dom";
import { getLyrics } from "../api/service";
import { useEffect, useState } from "react";

export default function Lyric() {

    const {track,id} = useParams();
    const [lyrics, setLyrics] = useState('');



    const fetchLyrics = async () => {
        const res = await getLyrics(id);

        if(res){
            setLyrics(res)
        }
       
    }
    useEffect(() => {
        fetchLyrics(); 
    },[id])





    return (
        <div className="w-[100vw] h-[100vh] flex flex-col gap-[3rem] items-center justify-center bg-slate-100">
            <div className='text-center font-medium text-xl text-gray-500 '>
                <p >Track Name: {track} </p>
            </div>

            <div className='h-[60vh] w-[60%] bg-gray-200 rounded-lg px-[5%] py-[2rem] text-[0.85rem] font-medium'>
                <p>{lyrics}</p>
            </div>
        </div>
)
}