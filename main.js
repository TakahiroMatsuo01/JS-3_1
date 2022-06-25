
const addBtn = document.getElementById('addBtn');
const tasks = [];

addBtn.addEventListener('click',function addValue(){
       
        function statusBtnGenelate(statusBtn){
                statusBtn= document.createElement('button');
                statusBtn.type='button';
                statusBtn.name='complete'
                statusBtn.textContent='完了'
                if(task.status==1){
                        statusBtn.textContent='作業中'
                }
        }
        statusBtnGenelate();

        function deleteBtnGenelate(deleteBtn){
                deleteBtn = document.createElement('button');
                deleteBtn.type='button';
                deleteBtn.name='delete';
                deleteBtn.textContent='削除';
        }
        deleteBtnGenelate();
        
      
        tasks.push(task);
tasks.forEach((task,index)=> {
      
        task = name;
        index +=1;
        table.appendChild(newTable);
        newTable.appendChild(newTr);
        newTr.appendChild(newTd).textContent =`${index}`;
        newTr.appendChild(newTd_2).textContent=`${taskdata}`;
        newTd_2.appendChild(statusBtnGenelate);
        newTd_2.appendChild(deleteBtnGenelate);
        const inputTxt = document.getElementById('txt_data').value;
        const table = document.getElementById('table');
        const newTable = document.createElement('table');
        const newTr = document.createElement('tr')
        const newTd=document.createElement('td')
        const newTd_2 =document.createElement('td');
        
        const task={
                name:inputTxt,
                status:1
        }       
        });
});
