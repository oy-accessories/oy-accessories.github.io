
const CACHE_NAME = "oy-accessories-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// استقبال Push Notification
self.addEventListener("push", event => {
  let payload = {};

  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = {
      title: "OY Accessories",
      body: event.data ? event.data.text() : "You have a new notification."
    };
  }

  const title = payload.title || "OY Accessories";

  const options = {
    body: payload.body || "You have a new order!",
    icon: "/oy-hero.png",
    badge: "/oy-hero.png",
    tag: payload.tag || "oy-new-order",
    data: {
      url: payload.url || "/#dashboard"
    },
    renotify: true
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// ملي تضغط على الإشعار، تحل التطبيق
self.addEventListener("notificationclick", event => {
  event.notification.close();

  const targetUrl = new URL(
    event.notification.data?.url || "/#dashboard",
    self.location.origin
  ).href;

  event.waitUntil(
    self.clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then(async clients => {
      for (const client of clients) {
        if (client.url.startsWith(self.location.origin)) {
          await client.focus();

          if ("navigate" in client) {
            await client.navigate(targetUrl);
          }

          return;
        }
      }

      return self.clients.openWindow(targetUrl);
    })
  );
});
