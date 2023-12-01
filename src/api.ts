const URL="https://api.jisuapi.com/astro/fortune";
const appkey = import.meta.env.VITE_APPKEY;

export function getCurrentChinaTime() {
    const chinaTimezone = 'Asia/Shanghai';
    
    const currentTime = new Date().toLocaleString('en-US', { timeZone: chinaTimezone });
    
    const formattedDate = new Date(currentTime).toISOString().split('T')[0];
    
    return formattedDate;
}

export function getConstellationFortune(id:number){
    const date=getCurrentChinaTime();
    return fetch(`${URL}?astroid=${id}&date=${date}&appkey=${appkey}`)
    .then((res)=>res.json()).then((data)=>{
        data.result;
    }).catch((error)=>console.error(error));
}