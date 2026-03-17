self.addEventListener('install', function(e) { self.skipWaiting(); });
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('message', function(e) {
  var data = e.data;
  if (data && data.type === 'SCHEDULE_POMODORO') {
    var delay = data.delay || 5400000;
    var count = data.count || 1;
    setTimeout(function() {
      self.registration.showNotification('Work block complete', {
        body: 'Time for your 5-minute reset. Step away.',
        tag: 'pomodoro-' + count,
        requireInteraction: false
      });
      self.clients.matchAll().then(function(clients) {
        clients.forEach(function(c) {
          c.postMessage({ type: 'POMODORO_FIRED', count: count });
        });
      });
    }, delay);
  }
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(function(clients) {
      if (clients.length > 0) { clients[0].focus(); }
      else { self.clients.openWindow('/my-daily-ritual/'); }
    })
  );
});
