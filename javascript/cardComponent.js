export function showCardComponent(cmpName){
    const card = document.createElement("div")
    card.innerHTML = `${ (cmpName)?cmpName:"No title"}`
    document.body.appendChild(card);
}