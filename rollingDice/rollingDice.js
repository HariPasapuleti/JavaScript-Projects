

function rollDice(){
    const noOfDice=document.getElementById("noOfDice").value
    const diceResult=document.getElementById('diceResult')
    const diceImages=document.getElementById('diceImages')
    const values=[]
    const images=[]

    for(let i=0;i<noOfDice;i++)
    {
        const value=Math.floor(Math.random()*6)+1
        values.push(value)
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`)
    }
    console.log(values)
    diceResult.textContent=`dice: ${values.join(', ')} `
    diceImages.innerHTML=images.join('')
}