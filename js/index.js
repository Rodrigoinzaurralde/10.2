const input = document.getElementById('inputText');
const boton = document.getElementById('buttonText').addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.setItem('valor', input.value);
});