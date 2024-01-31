window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    let myHistory = [];
    const myHistoryCopy = [];
    const MAX_HISTORY = 6;

    btn.onclick = () => {
      if (inp.value !== '') {
              myHistory.push(inp.value)
              myHistoryCopy.push(inp.value)
              if (myHistory.length >= MAX_HISTORY) {
                myHistoryCopy.shift()
                console.log(myHistoryCopy)
                myHistory = [ ...myHistoryCopy]
              }
              myHistory.sort(function(a,b){return a.length - b.length})   
              list.innerHTML = '';
              for (const itemText of myHistory) {
                list.innerHTML += "<li>"+ itemText +"</li>"
              }
              inp.value = '';
              btn.focus();
          }
    }
}