const stickyElement = document.querySelector(".header")
const section = document.querySelector(".imgHuge")



window.addEventListener("scroll" , ()=>{
    const rect = section.getBoundingClientRect();

    if (rect.top<=0 && rect.bottom >= stickyElement.offsetHeight) {
        stickyElement.style.position='sticky'
        stickyElement.style.top='0'
        
    } else {
        stickyElement.style.position='static'
        
    }
})