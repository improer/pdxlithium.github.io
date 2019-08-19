function menu() {
  document.getElementById('menu').style.cssText = 'position:absolute;right:1rem;top:0px;display:flex;flex-flow:column;height:500px;overflow:visible;justify-content:flex-start;';
  document.getElementById('ham').style.cssText = 'display:none;';
}

function ham() {
  document.getElementById('menu').style.cssText = 'display:none;';
  document.getElementById('ham').style.cssText = 'display:block; margin:1rem;';
}

function show() {
  document.getElementById('read').style.cssText = 'height:500px;overflow:hidden;transition:height 500ms ease;';
  document.getElementById('show').style.cssText = 'display:none;';
}

function hide() {
  document.getElementById('read').style.cssText = 'height:0px;overflow:hidden;transition:height 500ms ease;';
  document.getElementById('show').style.cssText = 'display:block;';
}
