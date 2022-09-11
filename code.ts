
figma.showUI(__html__);

figma.ui.resize(480, 720)
figma.ui.onmessage = pluginMessage => {
    const templateFrames = figma.root.findOne(n => n.type == "PAGE") as PageNode;
    console.log(figma)
    console.log(templateFrames.children.forEach(template => {console.log(template)} ))
    console.log(templateFrames.name)

    const nodes: SceneNode[] = [];
    for (let i = 0; i < pluginMessage.id; i++) {
      const rect = figma.createEllipse();
      rect.x = i * 150;
      //rect.fills = [{type: 'SOLID', color: {r: pluginMessage.background.r, g: pluginMessage.background.g, b: pluginMessage.background.b}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

  figma.closePlugin();
};
