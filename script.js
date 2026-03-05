let ki = "";
function write(text){
    ki += text + "\n";
}

// 1. Dobókocka

let dobasok = [];

for(let i=0;i<100;i++){
    dobasok.push(Math.floor(Math.random()*6)+1);
}

let stat = [0,0,0,0,0,0];

dobasok.forEach(d => stat[d-1]++);

write("Dobások statisztikája");

stat.forEach((db,index)=>{
    write((index+1) + ": " + db);
});

let atlag = dobasok.reduce((a,b)=>a+b)/dobasok.length;

let atlagFeletti = dobasok.filter(x => x > atlag).length;

write("Átlag: " + atlag);
write("Átlag feletti dobások: " + atlagFeletti);

write("");

// 2. Tömb

let tomb = [];

for(let i=0;i<100;i++){
    tomb.push(Math.floor(Math.random()*101)-50);
}

// a) legnagyobb

let max = Math.max(...tomb);
let maxIndex = tomb.indexOf(max);

write("Legnagyobb elem: " + max);
write("Index: " + maxIndex);

// b) összeg

let osszeg = tomb.reduce((a,b)=>a+b);

write("Összeg: " + osszeg);

// c) páros páratlan

let paros = tomb.filter(x => x%2==0).length;
let paratlan = tomb.filter(x => x%2!=0).length;

write("Páros: " + paros);
write("Páratlan: " + paratlan);

// d) 7-tel osztható

let oszthato7 = tomb.some(x => x%7==0);

write("Van 7-tel osztható: " + oszthato7);

// e) két negatív szomszéd

let szomszedNegativ = tomb.some((x,i) =>
    i>0 && i<tomb.length-1 && tomb[i-1]<0 && tomb[i+1]<0
);

write("Van két negatív szomszéd: " + szomszedNegativ);

// f) nagyobb mint szomszédok összege

let nagyobbSzomszed = tomb.some((x,i)=>
    i>0 && i<tomb.length-1 && x > tomb[i-1] + tomb[i+1]
);

write("Nagyobb mint szomszédok összege: " + nagyobbSzomszed);

// g) utolsó 3-mal osztható de 5-tel nem

let index = -1;

for(let i=tomb.length-1;i>=0;i--){
    if(tomb[i]%3==0 && tomb[i]%5!=0){
        index=i;
        break;
    }
}

write("Utolsó 3-mal osztható de 5-tel nem indexe: " + index);

// h) 3 egyforma szám

let haromEgyforma = false;

for(let i=0;i<tomb.length;i++){
    let db = tomb.filter(x => x==tomb[i]).length;
    if(db>=3){
        haromEgyforma=true;
        break;
    }
}

write("Van 3 egyforma: " + haromEgyforma);

// i) egymás melletti azonos

let egymasMellett = tomb.some((x,i)=> i>0 && x==tomb[i-1]);

write("Van egymás melletti azonos: " + egymasMellett);

// j) 10 többszörösei

write("10 többszöröseinek indexei:");

tomb.forEach((x,i)=>{
    if(x%10==0){
        write(i);
    }
});

// k) átlag alatti számok

let atlag2 = tomb.reduce((a,b)=>a+b)/tomb.length;

let atlagAlatti = tomb.filter(x => x < atlag2).length;

write("Átlag alatti számok: " + atlagAlatti);


// kiírás

document.getElementById("output").textContent = ki;