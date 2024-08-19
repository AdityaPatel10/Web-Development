function myProduct(n, p){
    this.name = n;
    this.price = p;
}

// e -> event passed in index.html


let arr = []
function addProduct(e) {
  //prevent from refreshing automatically

  e.preventDefault();
  let form = document.getElementById("product_form");

  // form.id_name.value

  let name = form.n.value;

  let price = form.p.value;

  let p1 = new myProduct(name, price)
  
  arr.push(p1);
  console.log(arr);

  let a = JSON.stringify(arr)
  localStorage.setItem('My Prodycts:', a)
  // localStorage.setItem('My Products', arr)
}
