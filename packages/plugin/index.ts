//packages/webgal/src/Core/parser/sceneParser.ts
console.log("enter plugin")
import SceneParser from 'webgal-parser';

import { sceneFetcher } from '../webgal/src/Core/controller/scene/sceneFetcher';
import { sceneParser } from '../webgal/src/Core/parser/sceneParser';



const file = "http://localhost:3000/game/scene/start.txt"
const rawScene = await sceneFetcher(file)
console.log(rawScene);
const parseredScene = sceneParser(rawScene, "start", file)
console.log(parseredScene)