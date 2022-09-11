
figma.showUI(__html__);

figma.ui.resize(480, 720)
figma.ui.onmessage = pluginMessage => {
    const templates = figma.root.findOne(n => n.type == "PAGE" && n.name == "templates") as PageNode;
    
    figma.getLocalPaintStyles()[0].paints=[
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: pluginMessage.background.r/255, g: pluginMessage.background.g/255, b: pluginMessage.background.b/255
        }
      }
    ];

    templates.children.forEach(template =>{
      if(template.name == pluginMessage.templateName){
        const newTemplate = template
        newTemplate.x = 0
        newTemplate.y = 0
        
        newTemplate.clone()
        figma.closePlugin("Votre maquette a été générée !");
      } else{

      }
    })
};