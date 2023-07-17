export function overrideSidebar(html) {
  const chatLog = html.find("#chat-log");

  const chatMessages = $(chatLog).find(".chat-message");
  chatMessages.addClass("pv-chat-box");

  const sidebar = $(html.find("#sidebar"));
  sidebar.addClass("pv-sidebar");

  const chatForm = $(html.find("#chat-message"));
  chatForm.addClass("pv-chat-form");
}
