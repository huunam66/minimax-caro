// X: fa-solid fa-xmark
// o: fa-solid fa-o


var bang = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var nguoi = -1;
var may = 1;
var x = 'fa-solid fa-xmark';
var o = 'fa-solid fa-o';

function get_empty(){
    empty = Array();
    for(let i = 0; i < bang.length; i++){
        for(let j = 0; j < bang[i].length; j++){
            if(bang[i][j] === 0){
                get = Array();
                get.push(i);
                get.push(j)
                empty.push(get);
            }
        }
    }
    return empty;
}

function nguoi_win(){
    
    if(bang[0][0] === bang[0][1] === bang[0][2] === nguoi
    || bang[1][0] === bang[1][1] === bang[1][2] === nguoi
    || bang[2][0] === bang[2][1] === bang[2][2] === nguoi
    || bang[0][0] === bang[1][1] === bang[2][2] === nguoi
    || bang[0][2] === bang[1][1] === bang[2][0] === nguoi
    || bang[0][0] === bang[1][0] === bang[2][0] === nguoi
    || bang[0][2] === bang[1][2] === bang[2][2] === nguoi)
        return true;
    
    return false;
}

function may_win(){
    
    if(bang[0][0] === bang[0][1] === bang[0][2] === may
    || bang[1][0] === bang[1][1] === bang[1][2] === may
    || bang[2][0] === bang[2][1] === bang[2][2] === may
    || bang[0][0] === bang[1][1] === bang[2][2] === may
    || bang[0][2] === bang[1][1] === bang[2][0] === may
    || bang[0][0] === bang[1][0] === bang[2][0] === may
    || bang[0][2] === bang[1][2] === bang[2][2] === may)
        return true;
    
    return false;
}


function may_danh(){
    return minimax(get_empty(), true);
}

function minimax(chieuSau, may_danh){
    let nuoc_di_tot = Array();
    
}


function chon_o_co(type, item){
    let i = document.createElement('i');
    i.className = type;
    item.appendChild(i);
}

const td = document.querySelectorAll('.square');
function clickCell(){
    td.forEach(item => {
        item.addEventListener('click', () => {
            if(item.innerHTML !== '')
                return;
           
            chon_o_co(x, item); 
            let id = item.id.split('');
            let row = parseInt(id[0]);
            let column = parseInt(id[1]);
            bang[row][column] = nguoi;

            if(nuoc_di_tot.length == 0){
                let get_index_rand = Math.floor(Math.random() * get_empty().length);
                nuoc_di_tot = empty[get_index_rand];
            }

            may_danh();
            row = nuoc_di_tot[0];
            column = nuoc_di_tot[1];
            bang[row][column] = may;
            let o_co = document.getElementById(row.toString() + column.toString());
            chon_o_co(o, o_co);

            nuoc_di_tot = Array();
            console.log(get_empty());
        })
    })
}
clickCell();

const choiLai = document.querySelector('.btn-restart');
choiLai.addEventListener('click', function(){
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            bang[i][j] = 0;    
    td.forEach(item => {
        item.innerHTML = '';
    })
})