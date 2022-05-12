
const addBtn = document.getElementById('addBtn');
const tasks = [];

addBtn.addEventListener('click',function addValue(){
        const get_txt = document.getElementById('txt_data').value;
        const str_p = document.getElementById('start_point');
        const newLi = document.createElement('li');
        const newBtn= document.createElement('input');
        newBtn.type='button';
        newBtn.name='name'
        newBtn.value='完了'

        const newDiv=document.createElement('div');
        newDiv.className='list-wrapper';
        const controlBtn = document.createElement('input');
        controlBtn.type='button';
        controlBtn.name='name';
        controlBtn.value='削除';

        const emp =document.createElement('br');
        const para= document.createElement('p')

        const task={
                name:"task1",
                status:get_txt
        }

tasks.push(task);

tasks.forEach(function(status_o,index) {
        status_o = task.status
        index +=1;
        
        str_p.appendChild(newLi);
        newLi.appendChild(para).textContent =`${index}\b\b\b${status_o}`;
        para.appendChild(newDiv);
        newDiv.appendChild(newBtn);
        newDiv.appendChild(controlBtn);       
        });
});
