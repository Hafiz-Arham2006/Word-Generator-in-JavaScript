const API="https://api.dictionaryapi.dev/api/v2/entries/en/"
document.getElementById('btn').addEventListener('click',()=>{
    let input=document.getElementById('input').value;
    if(input==""){
        alert('Please Enter Word')
    }
     
    fetch(`${API}${input}`)
    .then(data=>data.json())
    .then(output=>{
        console.log(output)
   document.getElementById('word').innerHTML="Word: "+"  "+ output[0].word
   document.getElementById('definition').innerHTML="Definiton: "+"  "+ output[0].meanings[0].definitions[0].definition
   document.getElementById('partofspeech').innerHTML="Part of Speech: "+" "+ output[0].meanings[0].partOfSpeech
   document.getElementById('antonyms').innerHTML="Antonyms: "+" "+output[0].meanings[0].antonyms
   document.getElementById('input').value=""   
   
})
.catch((error)=>{
    alert('Sorry we do not have this word')
})
})









