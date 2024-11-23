import { app, BrowserWindow } from "electron";
import path from "path";

app.on("ready", function () {
    const window = new BrowserWindow({});
    window.loadFile(path.join(app.getAppPath(), "/dist-ui/index.html"));
});
