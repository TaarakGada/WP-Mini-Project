let saveBtn= document.querySelector('.save-article');
let saveDiv= document.querySelector('.saved-div')

saveBtn.addEventListener('click', save);

function save(){
    if(saveBtn.innerHTML==='Enroll'){
        saveBtn.innerHTML='Cancel';
        saveDiv.classList.remove('hide');
        console.log('save');
    }
    else if(saveBtn.innerHTML==='Cancel'){
    saveBtn.innerHTML='Enroll'
    saveDiv.classList.add('hide');
    console.log('unsave')
    }
}


