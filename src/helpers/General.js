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