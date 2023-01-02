const bar = document.getElementById('bar');
const close = document.getElementById('close');
const ul = document.getElementById('ul');
bar.addEventListener('click',()=>{
    ul.style.display='block';
    if(ul){
        bar.style.display='none';
        close.style.display='block'
    }
})

close.addEventListener('click',()=>{
    ul.style.display='none';
    if(ul){
        close.style.display='none';
        bar.style.display='block'
    }
})