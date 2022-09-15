
figma.showUI(__html__);

figma.ui.resize(480, 720)
figma.ui.onmessage = async pluginMessage => {
    const newtemplate = figma.root.findOne(n => n.type == "COMPONENT" && n.name == pluginMessage.templateName) as ComponentNode
    console.log(newtemplate.key)
    console.log(pluginMessage.templateName)

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
    
    const template = figma.importComponentByKeyAsync(pluginMessage.templateKey);
    (await template).createInstance();

    figma.getStyleById('S:9278e535e870768e600bbf795878d759bfc67200,')
    /*
    const libr = figma.currentPage.findOne(n => n.type == "COMPONENT" && n.name == "primary") as ComponentNode
    const col = libr.findOne(n => n.type == "RECTANGLE") as ComponentNode
    console.log(col.fillStyleId)
    */

    figma.closePlugin("Votre maquette a été générée !");
    figma.closePlugin();
};