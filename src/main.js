const electron = require('electron');
// const shortcut = require('electron-localshortcut');

const {app, BrowserWindow} = electron;

app.on('ready', function () {
    const mainWindow = new BrowserWindow();
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // shortcut.register(mainWindow, 'Ctrl+A', () => {
    //
    // })
});