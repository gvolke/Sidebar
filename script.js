const button = document.getElementsByClassName('clickable')
const expandedDiv = document.getElementById('aside-expanded')
const shrunkenDiv = document.getElementById('aside-shrink')
const mainTittle = document.querySelector('#main-tittle')

for (let i = 0; i < button.length; i++) {    
    button[i].onclick = function() {  
        expandedDiv.classList.toggle('invisible')
        shrunkenDiv.classList.toggle('invisible')

        const expandedIsInvisible = expandedDiv.classList.contains('invisible')
        const shrunkenIsInvisible = shrunkenDiv.classList.contains('invisible')
        
        if (expandedIsInvisible) {
            mainTittle.style.marginLeft = '4em'            
        } else if(shrunkenIsInvisible) {
            mainTittle.style.marginLeft = '10em'
        }
    }
}