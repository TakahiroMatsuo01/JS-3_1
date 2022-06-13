
const addBtn = document.getElementById('addBtn');
const tasks = [];

addBtn.addEventListener('click',function addValue(){
        const inputTxt = document.getElementById('txt_data').value;
        const table = document.getElementById('table');
        const newTable = document.createElement('table');
        const statusBtn= document.createElement('button');
        statusBtn.type='button';
        statusBtn.name='complete'
        statusBtn.textContent='完了'

        const deleteBtn = document.createElement('button');
        deleteBtn.type='button';
        deleteBtn.name='delete';
        deleteBtn.textContent='削除';

        const newTr = document.createElement('tr')
        const newTd=document.createElement('td')
        const newTd_2 =document.createElement('td');
        const task={
                name:inputTxt,
                status:1
        }
if(task.status==1){
        statusBtn.textContent='作業中'
}
tasks.push(task);

tasks.forEach(function(taskdata,index) {
        taskdata = task.name;
        index +=1;
        table.appendChild(newTable);
        newTable.appendChild(newTr);
        newTr.appendChild(newTd).textContent =`${index}`;
        newTr.appendChild(newTd_2).textContent=`${taskdata}`;
        newTd_2.appendChild(statusBtn);
        newTd_2.appendChild(deleteBtn);       
        });
});
