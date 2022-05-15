
const addBtn = document.getElementById('addBtn');
const tasks = [];

addBtn.addEventListener('click',function addValue(){
        const get_Txt = document.getElementById('txt_data').value;
        const start_point = document.getElementById('start_point');
        const newTable = document.createElement('table');
        const completeBtn= document.createElement('input');
        completeBtn.type='button';
        completeBtn.name='name'
        completeBtn.value='完了'

        const newDiv=document.createElement('div');
        newDiv.className='list-wrapper';
        const deleteBtn = document.createElement('input');
        deleteBtn.type='button';
        deleteBtn.name='name';
        deleteBtn.value='削除';

        const newTr = document.createElement('tr')
        const newTd=document.createElement('td')
        const newTd_2 =document.createElement('td');
        const task={
                name:'task1',
                status:get_Txt
        }

tasks.push(task);

tasks.forEach(function(task,index) {
        task = task.status
        index +=1;
        start_point.appendChild(newTable);
        newTable.appendChild(newTr);
        newTr.appendChild(newTd).textContent =`${index}`;
        newTr.appendChild(newTd_2).textContent=`${task}`;
        newTd_2.appendChild(completeBtn);
        newTd_2.appendChild(deleteBtn);       
        });
});
