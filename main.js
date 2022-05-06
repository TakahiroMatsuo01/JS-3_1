
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click',function addValue(){
    
    const get_txt = document.getElementById('txt_data').value;
    const str_p = document.getElementById('start_point');
    const newLi = document.createElement('li');
    const newBtn= document.createElement('input');
            newBtn.type='button';
            newBtn.name='name'
            newBtn.value='完了'
    
    const wrapper=document.createElement('div');
            wrapper.className='list-wrapper';
    const controlBtn = document.createElement('input');
            controlBtn.type='button';
            controlBtn.name='name';
            controlBtn.value='削除';

    const emp =document.createElement('br');
    const para= document.createElement('p')
  
    let object = [{ status:`${get_txt}`}];
    object.push(`${get_txt}`);
    object.forEach(function(status_o,index) {
       index++;
       status_o=`${index}\b\b\b${object.status}`
            str_p.appendChild(newLi);
          newLi.appendChild(para).textContent = status_o;
        //   object.push(status);
          para.appendChild(wrapper);
        wrapper.appendChild(newBtn);
        wrapper.appendChild(controlBtn);

});

});
