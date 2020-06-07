const maze = new MazeGenerator();
const ui = new UI();


ui.button.addEventListener("click", () => {
    ui.button.innerText = "Yeni Oyun";
    ui.clearMap();
    maze.generateMaze();
});

ui.map.addEventListener("touchstart", ui.startTouch, false);
ui.map.addEventListener("touchmove", ui.moveTouch, false);
document.addEventListener("keyup", e => {
    if (e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40) {
        ui.keypress(e.which);
    }
});