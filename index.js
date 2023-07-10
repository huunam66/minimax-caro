// X: fa-solid fa-xmark
// o: fa-solid fa-o


var bang_caro = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var nguoi = -1;
var may = 1;








const td = document.querySelectorAll('.square');
function clickCell(){
    td.forEach(item => {
        item.addEventListener('click', () => {
            if(item.innerHTML !== '')
                return;
            const i = document.createElement('i');
            i.className = 'fa-solid fa-xmark';
            item.appendChild(i);
            
            let id = item.id.split('');

            let row = parseInt(id[0]);
            let column = parseInt(id[1]);
            bang_caro[row][column] = nguoi;
            console.log(bang_caro);

        })
    })
}

clickCell();