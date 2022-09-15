"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.resize(480, 720);
figma.ui.onmessage = (pluginMessage) => __awaiter(void 0, void 0, void 0, function* () {
    figma.getLocalPaintStyles()[0].paints = [
        {
            type: "SOLID",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            color: {
                r: pluginMessage.background.r / 255, g: pluginMessage.background.g / 255, b: pluginMessage.background.b / 255
            }
        }
    ];
    const template = figma.importComponentByKeyAsync(pluginMessage.templateKey);
    (yield template).createInstance();
    figma.getStyleById('S:9278e535e870768e600bbf795878d759bfc67200,');
    /*
    const libr = figma.currentPage.findOne(n => n.type == "COMPONENT" && n.name == "primary") as ComponentNode
    const col = libr.findOne(n => n.type == "RECTANGLE") as ComponentNode
    console.log(col.fillStyleId)
    */
    figma.closePlugin("Votre maquette a été générée !");
    figma.closePlugin();
});
