import Sun from '../assets/imgs/sun.png'
import Partcloud from '../assets/imgs/partcloud.png'
import Rain from '../assets/imgs/rainly.png'
import Cloud from '../assets/imgs/cloud.png'
 /* eslint-disable */
export const getImage=(text)=>{
    let src='';
    if(text==='Sunny'){
        src=Sun
    }else if(text==='Partly cloudy'){
        src=Partcloud
    }else if(text==='Patchy rain possible'){
        src=Partcloud
    }else if(text==='Rain'){
        src=Rain
    }else if(text==='Cloud'){
        src=Cloud
    }else if(text==='Mist'){
        src=Cloud
    }else if(text==='Thundery outbreaks possible'){
        src=Rain
    }else if(text==='Fog'){
        src=Cloud
    }else if(text==='Clear'){
        src=Sun
    }else if(text==='Moderate rain'){
        src=Rain
    }else if(text==='Moderate or heavy rain shower'){
        src=Rain
    }else if(text==='Heavy rain'){
        src=Rain
    }

    
    

   

    return src;
}

export const Translator=(text)=>{
    let t='';
    if(text==='Mon'){
        t='Bazar ertəsi'
    }else if(text==='Tue'){
        t='Çərşənbə axşamı'
    }else if(text==='Wed'){
        t='Çərşənbə'
    }else if(text==='Thu'){
        t='Cümə axşamı'
    }else if(text==='Fri'){
        t='Cümə'
    }else if(text==='Sat'){
        t='Şənbə'
    }else if(text==='Sun'){
        t='Bazar günü'
    }else{
        t='NaN'
    }

    return t;
}