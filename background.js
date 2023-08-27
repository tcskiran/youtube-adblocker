chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    const response = await chrome.tabs.sendMessage(tabId, {
      action: 'urlChanged',
    });
    console.log(response);
  }
});

// chrome.webNavigation.onCompleted.addListener(
//   function (details) {
//     chrome.scripting.executeScript({
//       target: { tabId: details.tabId },
//       files: ['content.js'],
//     });
//   },
//   { url: [{ urlContains: '.' }] }
// );

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   let activeTab = tabs[0];
//   console.log('curretn tab => ', tabs);
//   chrome.scripting.executeScript(
//     {
//       target: { tabId: activeTab.id },
//       function: functionToInject,
//     },
//     (results) => {
//       if (chrome.runtime.lastError) {
//         console.error(chrome.runtime.lastError);
//         return;
//       }

//       // Handle results here
//     }
//   );
// });

// setTimeout(function1, 5000);
// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// function1();
// async function function1() {
//   await delay('', 5000);
//   chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
//     if (changeInfo.url) {
//       // Send a message to the content script
//       console.log('tabID => ', tabId);
//       console.log('changeInfo => ', changeInfo);
//       console.log('tab => ', tab);
//       // chrome.tabs.sendMessage(tabId, { action: 'greetFromBackground' });
//       chrome.scripting.executeScript(
//         {
//           target: { tabId: tabId },
//           function: functionToInject,
//         },
//         (results) => {
//           if (chrome.runtime.lastError) {
//             console.error(chrome.runtime.lastError);
//             return;
//           }

//           // Handle results here
//         }
//       );
//     }
//   });
// }

// function functionToInject() {
//   chrome.runtime.sendMessage({ message: 'Hello from Background!' });
// }

// chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
//   if (changeInfo.url) {
//     // Send a message to the content script
//     console.log('tabID => ', tabId);
//     console.log('changeInfo => ', changeInfo);
//     console.log('tab => ', tab);
//     chrome.tabs.sendMessage(tabId, { action: 'greetFromBackground' });
//     // chrome.scripting.executeScript({
//     //   target: { tabId: tabId },
//     //   function: function () {
//     //     console.log('Hello from injected script');
//     //     chrome.runtime.sendMessage({ action: 'greetFromBackground' });
//     //     console.log('Bye from injected script');
//     //   },
//     // });
//   }
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log('sender => ', sender);
//   console.log(
//     sender.tab
//       ? 'from a content script:' + sender.tab.url
//       : 'from the extension'
//   );
//   if (request.action === 'urlChanged') {
//     // Handle the URL change in content.js
//     console.log('URL changed in content script');
//   }
//   sendResponse({ farewell: 'bye' });
// });

// chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
//   if (changeInfo.url) {
//     // Send a message to the content script
//     console.log('tabID => ', tabId);
//     console.log('changeInfo => ', changeInfo);
//     console.log('tab => ', tab);
//     chrome.scripting.executeScript({
//       target: { tabId: tabId },
//       func: async function () {
//         console.log('Script injected into tab:', tabId);
//         const response = await chrome.tabs.sendMessage(tabId, {
//           action: 'urlChanged',
//         });
//         console.log('response => ', response);
//         // chrome.runtime.sendMessage({ action: 'urlChanged' });
//       },
//     });
//   }
// });

// function sendMessageToContentScript() {
//   console.log('hello');
// }

// function sendMessageToContentScript() {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const activeTab = tabs[0];
//     if (activeTab) {
//       chrome.tabs.sendMessage(activeTab.id, { action: 'urlChanged' });
//     }
//   });
// }
