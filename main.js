console.log("JSは正常に読み込まれています。")
const addBtn = document.getElementById('addBtn');
let id_count =0;

addBtn.addEventListener('click',function addValue(){
    
    const get_txt = document.getElementById('txt_data').value;
    const str_p = document.getElementById('start_point');
    const Newli = document.createElement('li');
    const Newbtn= document.createElement('input');
            Newbtn.type='button';
            Newbtn.name='name'
            Newbtn.value='完了'
    
    const wrapper=document.createElement('div');
            wrapper.className='list-wrapper';
    const process = document.createElement('input');
            process.type='button';
            process.name='name';
            process.value='削除';

    const emp =document.createElement('br');
    const para= document.createElement('p')
    
    id_count++;
    let object = { id:`${id_count}`,txt:`${get_txt}`}
    
    Object.keys(object).forEach(key => {

        str_p.appendChild(Newli);
        Newli.appendChild(para).textContent = `${id_count}\b\b\b${get_txt}`;
        para.appendChild(wrapper);
        wrapper.appendChild(Newbtn);
        wrapper.appendChild(process);

});
});
