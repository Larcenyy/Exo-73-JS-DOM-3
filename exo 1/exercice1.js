let avatarEls = document.querySelectorAll("img");

console.log(avatarEls);
console.log(typeof avatarEls);


for(let i = 0; i < avatarEls.length; i++){
    avatarEls[i].innerText = i.toString();
    avatarEls[i].style.height = "50px"
    avatarEls[i].title = "test"
    avatarEls[i].alt = "test-alt";
}










