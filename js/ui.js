class UI {
    constructor() {
        this.map = document.querySelector(".map");
        this.button = document.getElementById("game-button");
        this.initialX = null;
        this.initialY = null;
    }
    clearMap() {
        while (this.map.firstElementChild) {
            this.map.firstElementChild.remove();
        }
    }

    startTouch(e) {
        ui.initialX = e.touches[0].clientX;
        ui.initialY = e.touches[0].clientY;
    };

    moveTouch(e) {
        if (ui.initialX === null) {
            return;
        }

        if (ui.initialY === null) {
            return;
        }

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;

        const diffX = ui.initialX - currentX;
        const diffY = ui.initialY - currentY;

        const playerCol = Number(document.querySelector(".player").parentElement.getAttribute("data-col"));
        const playerCell = Number(document.querySelector(".player").parentElement.getAttribute("data-cell"));

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                setTimeout(() => {
                    ui.moveLeft(playerCol, playerCell)
                }, 100);
            } else {
                setTimeout(() => {
                    ui.moveRight(playerCol, playerCell)
                }, 100);
            }
        } else {
            if (diffY > 0) {
                setTimeout(() => {
                    ui.moveUp(playerCol, playerCell)
                }, 100);

            } else {
                setTimeout(() => {
                    ui.moveDown(playerCol, playerCell)
                }, 100);
            }
        }

        ui.initialX = null;
        ui.initialY = null;

        e.preventDefault();
    };
    moveUp(col, cell) {
        const current = document.querySelector(`div[data-col='${col}'][data-cell='${cell}']`);
        const player = current.firstElementChild;
        const up = document.querySelector(`div[data-col='${col}'][data-cell='${cell-1}']`);
        if (up.style.background.indexOf("rgb(255, 255, 255)") >= 0) {
            up.appendChild(player);
        }
        if (up.hasAttribute("data-finish")) {
            setTimeout(() => {
                ui.clearMap();
                ui.map.innerHTML = "<h2>Tebrikler!</h2>"
            }, 100);
        }
    }

    moveDown(col, cell) {
        const current = document.querySelector(`div[data-col='${col}'][data-cell='${cell}']`);
        const player = current.firstElementChild;
        const down = document.querySelector(`div[data-col='${col}'][data-cell='${cell+1}']`);
        if (down && down.style.background.indexOf("rgb(255, 255, 255)") >= 0) {
            down.appendChild(player);
        }
        if (down && down.hasAttribute("data-finish")) {
            setTimeout(() => {
                ui.clearMap();
                ui.map.innerHTML = "<h2>Tebrikler!</h2>"
            }, 100);
        }
    }

    moveRight(col, cell) {
        const current = document.querySelector(`div[data-col='${col}'][data-cell='${cell}']`);
        const player = current.firstElementChild;
        const right = document.querySelector(`div[data-col='${col+1}'][data-cell='${cell}']`);
        if (right.style.background.indexOf("rgb(255, 255, 255)") >= 0) {
            right.appendChild(player);
        }
        if (right.hasAttribute("data-finish")) {
            setTimeout(() => {
                ui.clearMap();
                ui.map.innerHTML = "<h2>Tebrikler!</h2>"
            }, 100);
        }
    }

    moveLeft(col, cell) {
        const current = document.querySelector(`div[data-col='${col}'][data-cell='${cell}']`);
        const player = current.firstElementChild;
        const left = document.querySelector(`div[data-col='${col-1}'][data-cell='${cell}']`);
        if (left.style.background.indexOf("rgb(255, 255, 255)") >= 0) {
            left.appendChild(player);
        }
        if (left.hasAttribute("data-finish")) {
            setTimeout(() => {
                ui.clearMap();
                ui.map.innerHTML = "<h2>Tebrikler!</h2>"
            }, 100);
        }
    }

    keypress(keyCode) {
        const playerCol = Number(document.querySelector(".player").parentElement.getAttribute("data-col"));
        const playerCell = Number(document.querySelector(".player").parentElement.getAttribute("data-cell"));
        switch (keyCode) {
            case 37:
                ui.moveLeft(playerCol, playerCell);
                break;
            case 38:
                ui.moveUp(playerCol, playerCell);
                break;
            case 39:
                ui.moveRight(playerCol, playerCell);
                break;
            case 40:
                ui.moveDown(playerCol, playerCell);
                break;
        }

    }
}