import {inputAdd,inputNumberSetting,inputTextSetting,inputDelete} from "./constModul.js";
function addTargetEvent(){
    if(inputAdd.value){
        addTargetFunc(counter++, inputAdd.value);
        inputAdd.value = '';
    }else{
        borderWarning(inputAdd);
    }
}
function settingTargetEvent(){
    if(inputNumberSetting.value && inputTextSetting.value && document.getElementsByClassName(inputNumberSetting.value)[1] != undefined){
        let textElement = document.getElementsByClassName(inputNumberSetting.value)[2];
        textElement.innerHTML = inputTextSetting.value;
        inputTextSetting.value = '';
        inputNumberSetting.value = '';  
    }else if(inputNumberSetting.value == false){
        borderWarning(inputNumberSetting);
    }else if(inputTextSetting.value == false){
        borderWarning(inputTextSetting);
    }else if(document.getElementsByClassName(inputNumberSetting.value)[1] == undefined){
        borderWarning(inputNumberSetting);
    }
}
function buttonTargetEvent(){
    if(inputDelete.value && document.getElementsByClassName(inputDelete.value)[1]){
        let divElement = document.getElementsByClassName(inputDelete.value)[0];
        divElement.remove();
        inputDelete.value = '';
    }else{
        borderWarning(inputDelete);
    }
}
export {addTargetEvent, settingTargetEvent, buttonTargetEvent};