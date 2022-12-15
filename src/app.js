

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


for (let i=0; i < pronoun.length; i++){
  for(let j=0; j < adj.length; j++){
    for(let h=0; h < noun.length; h++){
      //console.log('${pronoun[i]}${adj[j]}${noun[h]}.com');
      let div = document.createElement('div');
      div.innerText = `${pronoun[i]}${adj[j]}${noun[h]}.com`
      document.body.appendChild(div);
    }
  }
}


