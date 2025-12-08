// Check if the Telegram WebApp object is available
if (window.Telegram && window.Telegram.WebApp) {
    const webApp = window.Telegram.WebApp;

    // Call ready() to let the Telegram client know the app is loaded
    webApp.ready();

    // Example: Get user's first name for personalization (if available)
    const user = webApp.initDataUnsafe.user;
    let welcomeText = "Hello from your Mini App!";

    if (user && user.first_name) {
        welcomeText = `Welcome, ${user.first_name}! This is your Mini App.`;
    }

    // Display the text in the HTML element
    document.getElementById('info-display').textContent = welcomeText;

    // Optionally, make the Main Button visible
    webApp.MainButton.setText('Close App');
    webApp.MainButton.show();
    webApp.MainButton.onClick(() => webApp.close());

} else {
    // Fallback for when the app is opened outside of Telegram
    document.getElementById('info-display').textContent = "This app is intended to be opened inside Telegram.";
}