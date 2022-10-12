// <<<<<<< HEAD
// =======

// >>>>>>> c94bfdfd30e88267daf29f327bccd6031930e1c1
const showLink = function() {
const headerLink = document.querySelectorAll("#headerLink");
function clearLink() {
  headerLink.forEach(function(item){
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}
headerLink.forEach(function(item){
  item.addEventListener("click", function() {
    clearLink();
      item.classList.add("active");
      item.style.transition = '0.5s';
  });
});
 
}

export default showLink;
/*
function clearLink() {
  headerLink.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}
headerLink.forEach((item) => {
  item.addEventListener("click", () => {
    clearLink();
    item.classList.add("active");
  });
});

*/