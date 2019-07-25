export default function borderWarning(elem){
    let TIME = setTimeout(() => {
        elem.style = 'box-shadow: 0 0 6px #F32828';
    },50);
    setTimeout(() => {
        clearTimeout(TIME);
        elem.style = 'border-color: none';
    },500);
}


