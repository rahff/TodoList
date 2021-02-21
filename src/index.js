import './style.css';

const input = document.querySelector('#ajouter');
const list  = document.querySelector('ul');
const btnAjouter = document.querySelector('#add');

btnAjouter.addEventListener('click',addTodo);


function addTodo(){
    
    if(input.value.length > 3 ){
    const li = document.createElement('li');
    const span =  document.createElement('span');
    span.setAttribute('class','todo');
    const p = document.createElement('p');
    const btnDo = document.createElement('button');
    btnDo.classList.add('do');
    btnDo.addEventListener('click', ()=>{
        
        p.classList.toggle('checked');
        span.classList.toggle('done');
    });
    const btnSuppr = document.createElement('button');
    btnSuppr.classList.add('suppr');
    btnSuppr.addEventListener('click',(e)=>{
        const target = e.target;
        target.parentNode.remove();
    })
    li.appendChild(span);
    li.appendChild(p);
    li.appendChild(btnDo);
    li.appendChild(btnSuppr);
    list.appendChild(li);
    p.innerText = input.value;
    btnSuppr.innerHTML = "✖";
    btnDo.innerHTML = "✔";
    input.value = "";
    }else{
        btnAjouter.classList.add('animation');
        setTimeout(()=>{
            btnAjouter.classList.remove('animation')
        },1000)
    }

}


window.addEventListener('keypress',(e)=>{
    
    if(e.key === 'Enter'){
      e.preventDefault();
       addTodo();
    }
})