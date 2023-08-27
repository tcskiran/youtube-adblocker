console.log('running content js directly');

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? 'from a content script:' + sender.tab.url
//       : 'from the extension'
//   );
//   if (request.greeting === 'hello') {
//     sendResponse({ farewell: 'goodbye' });
//   }
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === 'Hello from Background!') {
//     console.log('Received message from background:', request.message);
//     // Do something in response if needed
//     sendResponse({ response: 'Message received in content.js' });
//   }
// });

// Listening for messages in the content script
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'greetFromBackground') {
//     console.log('Message received in content script from background.');
//   }
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log('indside listener');
//   // if (request.action === 'greetFromBackground') {
//   console.log('Message received in content script from background.');
//   // You can perform any necessary actions here
//   // }
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('sender => ', sender);
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  );
  if (request.action === 'urlChanged') {
    // Handle the URL change in content.js
    console.log('URL changed in content script');
    // Check for the button and click it every 1 second
    const interval1 = setInterval(() => {
      clickButton();
    }, 1000); // 1000 milliseconds = 1 second
  }
});

function clickButton() {
  console.log('Clicking the button');
  const targetButton = document.querySelector('.ytp-ad-skip-button'); // Replace with your button's CSS selector
  if (targetButton) {
    targetButton.click();
  }
}

// Check for the button and click it every 1 second
const interval = setInterval(() => {
  clickButton();
}, 1000); // 1000 milliseconds = 1 second
