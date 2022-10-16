const btnTriangle = function () {
    let btn = document.querySelector(".btntriangle");
    let handle = document.getElementById('handle');
    btn.addEventListener('click', function () {
        handle.classList.toggle('handleactive');
        
    })
}
export default btnTriangle;