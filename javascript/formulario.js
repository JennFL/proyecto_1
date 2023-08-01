const openModal = document.querySelector('.registrar');
const modal = document.querySelector('.crear_cuenta');
const closeModal = document.querySelector('.modal_close');
const envio = document.querySelector('.enviar')

openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add('crear_cuenta--show');
});

closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove('crear_cuenta--show');
});

envio.addEventListener("click", ()=>{
    alert("Tus datos se han registrado exitosamente <3");
})

