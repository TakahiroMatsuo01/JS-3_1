const addBtn = document.getElementById('addBtn');
let i =0;
    addBtn.addEventListener('click',function addValue(){
        const get_txt = document.getElementById('txt_data').value;
        const str_p = document.getElementById('start_point');
        const Newli = document.createElement('li');
        const process = document.createElement('input')
        process.type='button';
        process.name='name';
        i++;
        str_p.appendChild(Newli).textContent = `${i}\b\b\b${get_txt}`;
        str_p.appendChild(Newli).after = `${process}`;
    });