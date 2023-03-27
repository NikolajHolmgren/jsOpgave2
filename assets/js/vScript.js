
/*2. Se den lidt skæve h1 i header - sørg for den ved hover "shaker"/ryster sig lidt. I bedes anvende javascript til at løse denne opgave */

function shaking(){
    document.querySelector("#shakerShaker").classList.add("shakingShit");
}

function shakeStop(){
    document.querySelector("#shakerShaker").classList.remove("shakingShit");
}
/*4. Brug javascript til at indsætte et favicon - f.eks. det her http://hearthstoneapi.com/favicon.ico (I know...hvorfor ville man nogensinde gøre det irl...men for øvelsens skyld) */


function faviconChange(){
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';

    document.head.appendChild(link);
}
    link.href = 'http://hearthstoneapi.com/favicon.ico';
}

/*6. Som I måske har lagt mærke til, er der en .crazyPopup box som står udenfor body (se i css...prøv f.eks. at ændre property "right" til value -200 og 0). Opgaven er at den nu "popper up" når personer har scrollet 100px ned og forsvinde igen når de scroller op under 100px igen  - lookie: https://drive.google.com/file/d/10aSqzcL3br8DU5AhggE54Pal0Z3s-x5y/view */

