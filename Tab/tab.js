let options = document.querySelectorAll('.option');
let contents = document.querySelectorAll('.content');
options.forEach((op, idx) => {
    op.addEventListener('click', ()=>{
        options.forEach((i, ind) => {
            if(ind !== idx){
                i.classList.remove('active');
            }
            else{
                i.classList.add('active');
            }
            /**
              if(i!==this) i.classList.remove('active');
              else i.classList.add('active');
             */  
        })
        // let cont = document.querySelector(`#${idx+1}`);
        // cont.classList.add('show');
        contents.forEach((i, ind) => {
            if(ind !== idx){
                i.classList.remove('show');
            }
            else{
                i.classList.add('show');
            }
        })
    })
})