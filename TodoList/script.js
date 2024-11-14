let addBtn=document.getElementById('add-btn');
let mainList=document.getElementsByClassName('mainList')[0];
let clearBtn=document.getElementsByClassName('clearBtn')[0];
let textCount=document.getElementById('text-count');
let listArray=['some','sleoo'];
function myFunction(){
    for(let i=0;i<listArray.length;i++){
        let newPtag=document.createElement('p');
        let newList=document.createElement('div');
        let newEdit=document.createElement('button');
        let newDelete=document.createElement('button');
        let newBtnDiv=document.createElement("div");
        newPtag.textContent=listArray[i];
        newList.append(newPtag);
        mainList.append(newList);
        newList.classList.add('newlist');
        newPtag.classList.add('ptag');
        newEdit.classList.add('newEditBtn');
        newDelete.classList.add('newDeleteBtn');
        newBtnDiv.classList.add('newBtnDiv');
        newEdit.textContent="Edit";
        newDelete.textContent="Delete";
        newDelete.setAttribute('item',i);
        newBtnDiv.append(newEdit)
        newBtnDiv.append(newDelete)
        // newList.append(newEdit);
        newList.append(newBtnDiv);
        mainList.append(newList);
        newDelete.addEventListener('click',function(){
            mainList.textContent="";
            const indexItem=newDelete.getAttribute('item');
            listArray.splice(indexItem,1);
            myFunction();
            updatCountDisplay();

        });
       
        newPtag.addEventListener('click',function(){
            newPtag.style.textDecoration="line-through";
            updatCountDisplay();
        })
    }
}
myFunction();
addBtn.addEventListener('click',function(){
    mainList.textContent="";
    let inputValue=document.getElementById('input-box').value; 
    if(inputValue===""){
        alert('please fill you input box')
        myFunction()
    }else{
        listArray.push(inputValue);
        document.getElementById('input-box').value="";
        myFunction();
    }
        updatCountDisplay();
        inputValue.focus();
    })  ;
clearBtn.addEventListener('click',function(){
    listArray=[];
    myFunction();
    updatCountDisplay();
});

function updatCountDisplay(){
    let totalTasks=mainList.querySelectorAll('p').length;
    let completeTasks=mainList.querySelectorAll(
        'p[style*="text-decoration: line-through"]'
    );
    if(totalTasks===completeTasks.length){
        textCount.textContent=`you have completed all ${completeTasks.length} task(s)`
    }else{
        textCount.textContent=`you have completed ${completeTasks.length} out of ${totalTasks} task(s)`
    }

}
updatCountDisplay();

