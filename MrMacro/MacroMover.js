on("ready",function(){
  on("chat.message",function(msg){
    if(msg.type=="api" && msg.content.indexOf("!exportMacros")==0){
      var mrMacro = createObj("character", {
        name:"MrMacro",
        controlledby:msg.playerid
        });

        var macroList = findObjs({type:"macro"});
        _.each(macroList,function(macro){
          createObj("ability",{
            characterid:mrMacro.get("id"),
            name:mrmacro.get("name"),
            action:mrmacro.get("action"),
            istokenaction:macro.get("istokenaction"),
            description:macro.get("visibleto")
          });
         });
       }
  });

  on("chat:message",function(msg){
    if(msg.type=="api" && msg.content.indexOf("!importMacros")==0){
      var mrMacro = findObjs({type:"character",name:"MrMacro"})[0];
      var abilityList = findObjs({type:"ability",characterid:mrMacro.get("id")});
      _.each(abilityList,function(ability){
        createObj("macro", {
          name:ability.get("name"),
          action:ability.get("action"),
          istokenaction:ability.get("istokenaction"),
          visibleto:ability.get("description"),
          playerid:msg.playerid
        })
      });
    }
  });
});
