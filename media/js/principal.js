const checkboxs = document.querySelectorAll('.input');
const texto = document.querySelectorAll('.list__task p');

// const HandleClick = (event) => {
//     console.log('Olá mundo')
//     texto.forEach((textos) => textos.setAttribute("style", "text-decoration: line-through;"));
//     //texto.setAttribute("style", "text-decoration: line-through;");
    
// }

checkboxs.forEach((caixa) => caixa.addEventListener('click', HandleClick));




//checkboxs[0].addEventListener('click', () => console.log('agora foi!'))

