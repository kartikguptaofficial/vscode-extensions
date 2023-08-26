// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "kartikkiextension" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with  registerCommand
	// // The commandId parameter must match the command field in package.json


	// WEBVIEW
	// let disposable = vscode.commands.registerCommand('kartikkiextension.helloWorld', function () {
	// 	const panel = vscode.window.createWebviewPanel(
	// 		'webViewExample', // Identifies the type of the webview. Used internally
	// 		'Interactive WebView', // Title displayed to the user
	// 		vscode.ViewColumn.One, // Editor column to show the webview panel in
	// 		{}
	// 	);

	// 	panel.webview.html = getWebViewContent();
	// 	// 	// Display a message box to the user
	// 	// vscode.window.showInformationMessage('Hello World from KartikKiExtension!');
	// });


	// GET SELECTED TEXT
	let disposable = vscode.commands.registerCommand('kartikkiextension.helloWorld', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selectedText = editor.document.getText(editor.selection);
            if (selectedText) {
                vscode.window.showInformationMessage(`Selected Text: ${selectedText}`, {modal: true, detail:"Details"});
            } else {
                vscode.window.showInformationMessage('No text selected.');
            }
        } else {
            vscode.window.showInformationMessage('No active editor.');
        }
    });

	context.subscriptions.push(disposable);

	// context.subscriptions.push(
	// 	vscode.commands.registerCommand('todo.work', () => {
	// 		// Create and show a new webview
	// 		const panel = vscode.window.createWebviewPanel(
	// 			'todo', // Identifies the type of the webview. Used internally
	// 			'todo.work', // Title of the panel displayed to the user
	// 			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
	// 			{} // Webview options. More on these later.
	// 		);
	// 	})
	// );
}

// This method is called when your extension is deactivated
function deactivate() { }

function getWebViewContent() {
	return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Interactive WebView</title>
        </head>
        <body>
            <h1>Interactive WebView Example</h1>
            <button id="btn">Click Me</button>
            <p id="message"></p>
            
            <script>
                const btn = document.getElementById('btn');
                const message = document.getElementById('message');
                
                btn.addEventListener('click', () => {
                    message.textContent = 'Button clicked!';
                });
            </script>
        </body>
        </html>
    `;
}


module.exports = {
	activate,
	deactivate
}
