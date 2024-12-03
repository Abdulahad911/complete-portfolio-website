function showSideBar(){
    const sidebar = document.querySelector('.sidebar') 
    sidebar.style.display = 'flex'
}
function hideSideBar(){
     const sidebar = document.querySelector('.sidebar') 
    sidebar.style.display = 'none'
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
