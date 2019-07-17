document.addEventListener('DOMContentLoaded', function(){
    let inputAdd = getById('add-input');
    let inputNumberSetting = getById('setting-number-input');
    let inputTextSetting = getById('setting-text-input');
    let inputDelete = getById('delete-input');
    let buttonAdd = getById('add-button');
    let buttonSetting = getById('setting-button');
    let buttonDelete = getById('delete-button');
    let divAdd = getById('add-list');
    let divSetting = getById('setting-list');
    let divList = getById('div-list');
    let divDelete = getById('delete-list');
    let addA = getById('aAdd');
    let deleteA = getById('aDelete');
    let settingA = getById('aSetting');
    let counter = 1;
    addA.addEventListener('click', addAFunc);
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
    settingA.addEventListener('click', settingAFunc);
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
    deleteA.addEventListener('click', deleteAFunc);
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
    buttonAdd.addEventListener('click', addTargetEvent);
    function addTargetEvent(){
        if(inputAdd.value){
            addTargetFunc(counter++, inputAdd.value);
            inputAdd.value = '';
        }else{
            borderWarning(inputAdd);
        }
    }
    buttonSetting.addEventListener('click', settingTargetEvent);
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
    buttonDelete.addEventListener('click', buttonTargetEvent);
    function buttonTargetEvent(){
        if(inputDelete.value && document.getElementsByClassName(inputDelete.value)[1]){
            let divElement = document.getElementsByClassName(inputDelete.value)[0];
            divElement.remove();
            inputDelete.value = '';
        }else{
            borderWarning(inputDelete);
        }
    }
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
        divRow.classList.add('row');
        divRow.classList.add('main-list');
        divList.appendChild(divRow);
        let divColMd2 = document.createElement('div');
        divColMd2.classList.add('col-md-2');
        let divColMd10 = document.createElement('div');
        divColMd10.classList.add('col-md-10');
        divRow.appendChild(divColMd2);
        divRow.appendChild(divColMd10);
        let h3Number = document.createElement('h3');
        h3Number.id = 'h3-number';
        let h3Text = document.createElement('h3');
        h3Text.id = 'h3-text';
        h3Text.classList.add('text-truncate');
        h3Text.style = 'width: 50rem';
        divColMd2.appendChild(h3Number);
        divColMd10.appendChild(h3Text);
        h3Number.innerHTML = firstText;
        h3Text.innerHTML = lastText;
        h3Number.classList.add(firstText);
        h3Text.classList.add(firstText);
        divRow.classList.add(firstText);
    }
});