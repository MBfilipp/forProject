document.addEventListener('DOMContentLoaded', function(){

    //Add const and let variables

    const inputAdd = getById('add-input');
    const inputNumberSetting = getById('setting-number-input');
    const inputTextSetting = getById('setting-text-input');
    const inputDelete = getById('delete-input');
    const buttonAdd = getById('add-button');
    const buttonSetting = getById('setting-button');
    const buttonDelete = getById('delete-button');
    const divAdd = getById('add-list');
    const divSetting = getById('setting-list');
    const divList = getById('div-list');
    const divDelete = getById('delete-list');
    const addA = getById('aAdd');
    const deleteA = getById('aDelete');
    const settingA = getById('aSetting');
    let counter = 1;

    //Add addEventListener functions

    addA.addEventListener('click', addAFunc);
    settingA.addEventListener('click', settingAFunc);
    deleteA.addEventListener('click', deleteAFunc);
    buttonAdd.addEventListener('click', addTargetEvent);
    buttonDelete.addEventListener('click', buttonTargetEvent);
    buttonSetting.addEventListener('click', settingTargetEvent);

    //Add main functions

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
    function borderWarning(elem){
        let TIME = setTimeout(() => {
            elem.style = 'box-shadow: 0 0 6px #F32828';
        },  50);
        setTimeout(() => {
            clearTimeout(TIME);
            elem.style = 'border-color: none';
        },  500);
    }
    function classAdd(name, classAdd){
        return name.classList.add(classAdd);
    }
    function classRemove(name, classRemove){
        return name.classList.remove(classRemove);
    }
    function getById(Id){
        return document.getElementById(Id);
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