import {divAdd,divSetting,divDelete,addA,settingA,deleteA} from "./constModul.js";
function addAFunc(){
    if(divAdd.classList.contains('hide')){
        classRemove(divAdd, 'hide');
        classAdd(divSetting, 'hide');
        classAdd(divDelete, 'hide');
        classAdd(addA, 'active');
        classRemove(deleteA, 'active');
        classRemove(settingA, 'active');
    }else{
        classAdd(divAdd, 'hide');
        classRemove(addA, 'active');
    }
};
function settingAFunc(){
    if(divSetting.classList.contains('hide')){
        classRemove(divSetting, 'hide');
        classAdd(divDelete, 'hide');
        classAdd(divAdd, 'hide');
        classAdd(settingA, 'active');
        classRemove(addA, 'active');
        classRemove(deleteA, 'active');         
    }else{
        classAdd(divSetting, 'hide');
        classRemove(settingA, 'active');
    }
}
function deleteAFunc(){
    if(divDelete.classList.contains('hide')){
        classRemove(divDelete, 'hide');
        classAdd(divAdd, 'hide');
        classAdd(divSetting, 'hide');
        classAdd(deleteA, 'active');
        classRemove(addA, 'active');
        classRemove(settingA, 'active');  
    }else{
        classAdd(divDelete, 'hide');
        classRemove(deleteA, 'active');
    }
}
export {addAFunc, settingAFunc, deleteAFunc};