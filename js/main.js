<<<<<<< HEAD
function openSection(evt, sectName) 
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectName).style.display = "block";
    evt.currentTarget.className += " active";
}
=======
// Smooth Scroll Reveal Below
overalDelay = 250;

ScrollReveal().reveal('.background', {delay: overalDelay});
ScrollReveal().reveal('.homeInfoName', {delay: overalDelay});
ScrollReveal().reveal('.homeInfoP', {delay: overalDelay});
ScrollReveal().reveal('.members', {delay: overalDelay});
ScrollReveal().reveal('.repairCafe', {delay: overalDelay});
ScrollReveal().reveal('.guides', {delay: overalDelay});
ScrollReveal().reveal('.guideImg', {delay: overalDelay});
ScrollReveal().reveal('.guideChunk', {delay: overalDelay});
ScrollReveal().reveal('.repairCafeChunk', {delay: overalDelay});
ScrollReveal().reveal('.repairCafeImg', {delay: overalDelay});
ScrollReveal().reveal('.communityImg', {delay: overalDelay});
ScrollReveal().reveal('.communityChunk', {delay: overalDelay});
ScrollReveal().reveal('.moreInfo', {delay: overalDelay});
ScrollReveal().reveal('.finalize', {delay: overalDelay});
>>>>>>> dc294ce6311615760f1adb36de81fdf87bfd7401
