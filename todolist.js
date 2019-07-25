document.addEventListener('DOMContentLoaded', function(){
    import {addAFunc, settingAFunc, deleteAFunc} from './moduls/AFuncModul.js';
    import {addTargetEvent, settingTargetEvent, buttonTargetEvent} from './moduls/TargetEventModul.js';
    import {buttonAdd,buttonSetting,buttonDelete,divList,addA,settingA,deleteA} from './moduls/constModul.js';
    
    addA.addEventListener('click', addAFunc);
    settingA.addEventListener('click', settingAFunc);
    deleteA.addEventListener('click', deleteAFunc);
    buttonAdd.addEventListener('click', addTargetEvent);
    buttonDelete.addEventListener('click', buttonTargetEvent);
    buttonSetting.addEventListener('click', settingTargetEvent);

    function getById(Id){
        return document.getElementById(Id);
    }
    function classAdd(name, classAdd){
        return name.classList.add(classAdd);
    }
    function classRemove(name, classRemove){
        return name.classList.remove(classRemove);
    }
    function borderWarning(elem){
        let TIME = setTimeout(() => {
            elem.style = 'box-shadow: 0 0 6px #F32828';
        },50);
        setTimeout(() => {
            clearTimeout(TIME);
            elem.style = 'border-color: none';
        },500);
    }
    function addTargetFunc(firstText, lastText){
        let divRow = document.createElement('div');
        classAdd(divRow, 'row');
        classAdd(divRow, 'main-list');
        divList.appendChild(divRow);
        let divColMd2 = document.createElement('div');
        classAdd(divColMd2, 'col-md-2');
        let divColMd10 = document.createElement('div');
        classAdd(divColMd10, 'col-md-10');
        divRow.appendChild(divColMd2);
        divRow.appendChild(divColMd10);
        let h3Number = document.createElement('h3');
        h3Number.id = 'h3-number';
        let h3Text = document.createElement('h3');
        h3Text.id = 'h3-text';
        classAdd(h3Text, 'text-truncate');
        h3Text.style = 'width: 50rem';
        divColMd2.appendChild(h3Number);
        divColMd10.appendChild(h3Text);
        h3Number.innerHTML = firstText;
        h3Text.innerHTML = lastText;
        classAdd(h3Number, firstText);
        classAdd(h3Text, firstText);
        classAdd(divRow, firstText);
    }
});