const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

const main = document.getElementById('body')


let index = 0;

main.addEventListener('keydown', init(e) {
  console.log(e.which)
})


function init(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Way to go, you have been granted infinite lives");

      index = 0;
    }
  } else {
    index = 0;
  }

}
