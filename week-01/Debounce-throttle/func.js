export function debounce(callBack, time){
    let id;
    return function(arg){
        clearTimeout(id)
        id = setTimeout(() => {
           callBack(arg)
           alert(arg) 
        }, time);
    }
}

export function throttle(callBack, time){
    let lastTime = 0;
    return function(arg){
        let now = Date.now()
        if(now - lastTime >= time){
            callBack(arg)
            lastTime = now
        }
    }
}

