const AgentName = document.getElementById("AgentName")

const valorantAgents = [
  "Astra",
  "Breach",
  "Brimstone",
  "Chamber",
  "Clove",
  "Cypher",
  "Deadlock",
  "Fade",
  "Gekko",
  "Harbor",
  "Iso",
  "Jett",
  "KAY/O",
  "Killjoy",
  "Miks",
  "Neon",
  "Omen",
  "Phoenix",
  "Raze",
  "Reyna",
  "Sage",
  "Skye",
  "Sova",
  "Tejo",
  "Veto",
  "Viper",
  "Vyse",
  "Waylay",
  "Yoru"
];



function RandomAgent(){
    let randomnumber = Math.floor(Math.random() * valorantAgents.length);
    let agent = valorantAgents[randomnumber];
    AgentName.textContent = agent

}