(function () {
  "use strict";
  const config = window.WEDDING || WEDDING;
  const byId = (id) => document.getElementById(id);
  const setText = (id, value) => { if (byId(id) && value !== undefined) byId(id).textContent = value; };

  document.title = `${config.groomName} & ${config.brideName} | Wedding Invitation`;
  setText("groom-name", config.groomName);
  setText("bride-name", config.brideName);
  setText("signature-groom", config.groomName);
  setText("signature-bride", config.brideName);
  setText("hero-date", config.dateDisplay);
  setText("hero-time", config.mainTime);
  setText("venue-time", config.mainTime);
  setText("invitation-message", config.invitationMessage);
  setText("venue-name", config.venueName);
  setText("venue-address", config.venueAddress);
  setText("venue-city", config.venueCity);
  setText("family-signature", config.familySignature);

  const mapLink = byId("maps-link");
  if (mapLink && config.mapsUrl) mapLink.href = config.mapsUrl;

  const eventContainer = byId("events");
  if (eventContainer && Array.isArray(config.events)) {
    eventContainer.innerHTML = config.events.map(event => `
      <article class="event-card">
        <div class="event-icon">${escapeHtml(event.icon || "✦")}</div>
        <p class="event-meta">${escapeHtml(event.date || "")} · ${escapeHtml(event.time || "")}</p>
        <h3>${escapeHtml(event.name || "Event")}</h3>
        <p>${escapeHtml(event.description || "")}</p>
      </article>
    `).join("");
  }

  const gallery = config.gallery || [];
  if (gallery.length) {
    byId("gallery-section").hidden = false;
    byId("gallery").innerHTML = gallery.map(src =>
      `<img src="${encodeURI(src)}" alt="Wedding memory" loading="lazy">`
    ).join("");
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
  }

  const target = new Date(config.weddingDateTime).getTime();
  function updateCountdown() {
    let remaining = target - Date.now();
    if (!Number.isFinite(target) || Number.isNaN(target)) remaining = 0;
    if (remaining < 0) remaining = 0;
    const totalSeconds = Math.floor(remaining / 1000);
    setText("days", Math.floor(totalSeconds / 86400));
    setText("hours", Math.floor((totalSeconds % 86400) / 3600));
    setText("minutes", Math.floor((totalSeconds % 3600) / 60));
    setText("seconds", totalSeconds % 60);
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
