import {useState,useEffect} from "react"; 
const useOnlineStatus= ()=>{
    const [stats,setStats] = useState(true);
    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setStats(false);
        })
        window.addEventListener('online',()=>{
            setStats(true);
        })
    },[]);
    return stats;
}

export default useOnlineStatus;