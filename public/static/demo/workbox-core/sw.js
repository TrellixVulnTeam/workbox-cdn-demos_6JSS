importScripts('https://storage.googleapis.com/workbox-cdn/releases/v3.0.0-alpha/workbox-sw.dev.js');

const wb = new WorkboxSW({
  debug: true
});

const printLogs = () => {
  // ☠️ You should never so this - this is just so we can show off our logging.
  workbox.core._private.logger.debug(`🐛 Oh hai! I'm a debug message.`);
  workbox.core._private.logger.log(`🔧 Good ole log message.`);
  workbox.core._private.logger.warn(`⚠️ Uh Oh.... I'm a warning.`);
  workbox.core._private.logger.error(`☠️ Eek, stuff is breaking. p.s. I'm an error.`);
};

self.addEventListener('message', function(event) {
  switch(event.data.command) {
    case 'printLogs':
    printLogs();
      break;
    default:
      console.log(`Unknown command received in the service worker: `, event);
  }
});
