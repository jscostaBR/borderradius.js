var left = document.getElementById('left-border');
left.addEventListener('change', function validateTop(){
 let radius = document.getElementById('radius-generator');
 const regex = /^([0-9]{0,})(mm|cm|in|px|pt|pc|em|ex|ch|rem|vw|vh|%){0,3}?$/;
 let value = document.getElementById('left-border').value;
 if(value.match(regex)){
  switch (value){
   case 'mm':
   case 'cm':
   case 'in':
   case 'px':
   case 'pt':
   case 'pc':
   case 'em':
   case 'ex':
   case 'ch':
   case 'rem':
   case 'vw':
   case 'vh':
   case '%':
    snackbar('danger')
    break;
   default:
    if(value.match(/^[\d]*$/)){
     radius.style.borderTopLeftRadius = `${value}px`;
     snackbar('warning');
    }else{
     radius.style.borderTopLeftRadius = `${value}`;
     snackbar('success');
    }
    break;
  }
 }else{
  snackbar('danger');
 }
});

var top = document.getElementById('top-border');
top.addEventListener('input', function validateTop(){
 let radius = document.getElementById('radius-generator');
 const regex = /^([0-9]{0,})(mm|cm|in|px|pt|pc|em|ex|ch|rem|vw|vh|%){0,3}?$/;
 let value = document.getElementById('top-border').value;
 if(value.match(regex)){
  switch (value){
   case 'mm':
   case 'cm':
   case 'in':
   case 'px':
   case 'pt':
   case 'pc':
   case 'em':
   case 'ex':
   case 'ch':
   case 'rem':
   case 'vw':
   case 'vh':
   case '%':
    snackbar('danger');
    break;
   default:
    if(value.match(/^[\d]*$/)){
     radius.style.borderTopRightRadius = `${value}px`;
     snackbar('warning');
    }else{
     radius.style.borderTopRightRadius = `${value}`;
     snackbar('success');
    }
    break;
  }
 }else{
  snackbar('danger');
 }
});

var right = document.getElementById('right-border');
right.addEventListener('input', function validateRight(){
 let radius = document.getElementById('radius-generator');
 const regex = /^([0-9]{0,})(mm|cm|in|px|pt|pc|em|ex|ch|rem|vw|vh|%){0,3}?$/;
 let value = document.getElementById('right-border').value;
 if(value.match(regex)){
  switch (value){
   case 'mm':
   case 'cm':
   case 'in':
   case 'px':
   case 'pt':
   case 'pc':
   case 'em':
   case 'ex':
   case 'ch':
   case 'rem':
   case 'vw':
   case 'vh':
   case '%':
    snackbar('danger')
    break;
   default:
    if(value.match(/^[\d]*$/)){
     radius.style.borderBottomRightRadius = `${value}px`;
     snackbar('warning')
    }else{
     radius.style.borderBottomRightRadius = `${value}`;
     snackbar('success')
    }
    break;
  }
 }else{
  snackbar('danger')
 }
});

var bottom = document.getElementById('bottom-border');
bottom.addEventListener('input', function validateLeft(){
 let radius = document.getElementById('radius-generator');
 const regex = /^([0-9]{0,})(mm|cm|in|px|pt|pc|em|ex|ch|rem|vw|vh|%){0,3}?$/;
 let value = document.getElementById('bottom-border').value;
 if(value.match(regex)){
  switch (value){
   case 'mm':
   case 'cm':
   case 'in':
   case 'px':
   case 'pt':
   case 'pc':
   case 'em':
   case 'ex':
   case 'ch':
   case 'rem':
   case 'vw':
   case 'vh':
   case '%':
    snackbar('danger')
    break;
   default:
    if(value.match(/^[\d]*$/)){
     radius.style.borderBottomLeftRadius = `${value}px`;
     snackbar('warning')
    }else{
     radius.style.borderBottomLeftRadius = `${value}`;
     snackbar('success')
    }
    break;
  }
 }else{
  snackbar('danger')
 }
});

function copyTxt(){
 let copyText = document.getElementById("copyTxtID");
 copyText.select();
 copyText.setSelectionRange(0, 99999);
 document.execCommand("copy");

 let clone = document.getElementById('clone');
 let clipboard = document.getElementById('clipboard');
 clone.classList.toggle("d-none");
 clipboard.classList.toggle("d-none");
}

setInterval(function(){
 let radius = document.getElementById('radius-generator');
 let input = document.getElementById('copyTxtID');
 if(radius.style.borderRadius == ''){
  let txt = ``;
  input.value = txt;
 }else{
  let txt = `border-radius: ${radius.style.borderRadius};`;
  input.value = txt;
 }
},1000)

function snackbar(status){
 let snackbar = document.querySelector("#snackbar");
 if(status == "danger"){
  snackbar.classList.add("show-snackbar", "snackbar-danger")
  snackbar.innerHTML = "Enter a valid input!";
  setTimeout(function(){
   snackbar.classList.remove("show-snackbar", "snackbar-danger")
  },3000)
 }
 if(status == "warning"){
   let snackbar = document.querySelector("#snackbar");
   snackbar.classList.add("show-snackbar", "snackbar-warning")
   snackbar.innerHTML = "Input inserted without unit configuration. Px set as standard!";
   setTimeout(function(){
   snackbar.classList.remove("show-snackbar", "snackbar-warning")
  },3000)
 }
 if(status == "success"){
  snackbar.classList.add("show-snackbar", "snackbar-success")
  snackbar.innerHTML = "Valid input!";
  setTimeout(function(){
   snackbar.classList.remove("show-snackbar", "snackbar-success")
  },3000)
  let form = document.getElementsByClassName("todo-list-form")[0]
  form.reset()
 }
}