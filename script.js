function generateCells() {
    for(let i = 1; i<=100; i++){
        let cellRow = $(`<div class="cell-row"></div>`);
        let colCode = $(`.colId-${i}`).attr(`id`).split('-')[1];

        for(let j = 1; j<=100; j++){
            let cellcolumn = $(`<div class="input-cell" contenteditable="true" id="row-${i}-col-${j}" data="${colCode}"></div>`);
            cellRow.append(cellcolumn);
        }

        $('.input-cell-container').append(cellRow);

    }
}

$(document).ready(function() {

    for (let i = 1; i <= 100; i++) {
        let ans = ""
        let n = i;

        while (n > 0) {

            let rem = n % 26;
            if (rem == 0) {
                ans = "Z" + ans;
                n = Math.floor(n / 26) - 1;
            }
            else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }

        let column = `<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`;
        $('.column-name-container').append(column);

        let row = `<div class="row-name" id="rowId-${i}">${i}</div>`;
        $('.row-name-container').append(row);
    }

    // generates cells
    generateCells();
    

});


let ans = ""
let n = 128;

while (n > 0) {

    let rem = n % 26;
    if (n == 0) {
        ans = "Z" + ans;
        n = Math.floor(n / 26) - 1;
    }
    else {
        ans = String.fromCharCode(rem - 1 + 65) + ans;
        n = Math.floor(n / 26);
    }
}

console.log(ans)
