function $(id){
    return typeof(id) === 'string' ? document.getElementById(id) : null;
}

// window.onload = function() {
//     var list = $('tab_header').getElementsByTagName('li');
//     var allDom = $('tab_content').getElementsByClassName('dom');
//     for(let i=0;i<list.length;i++) {
//             var li = list[i];
//             li.id = i;
//             li.onmouseover = function(){
//                 for(let j = 0; j<list.length; j++){
//                     list[j].className = '';
//                     allDom[j].style.display = 'none'
//                 }
//                 this.className = 'selected';
//                 allDom[this.id].style.display = 'block'
//             }
//     }
// }

var tab = new Tab();
tab.init();