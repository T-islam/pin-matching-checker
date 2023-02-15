/**
 * @author Touhed Islam <mr.touhed.i@gmail.com>
 */

// function for get element id
function getId(Id) {
  const id = document.getElementById(Id);
  return id;
}

// function for display with Id
function isDisplay(id, isShow) {
  if (isShow) {
    id.style.display = "block";
  } else {
    id.style.display = "none";
  }
}
