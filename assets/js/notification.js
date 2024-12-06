//Toast message
//Toast message
function toast({
  title = "Success",
  message = "Tạo tài khoản thành công",
  type = "success",
  duration = 3000,
}) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    // Auto remove toast
    const autoRemove = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    };

    const colors = {
      success: "#47d864",
      info: "#2f86eb",
      warning: "#ffc021",
      error: "#ff6243",
    };
    const icons = {
      success: "fa fa-check-circle",
      info: "fa fa-info-circle",
      warning: "fa fa-exclamation-circle",
      error: "fa fa-times-circle",
    };
    const color = colors[type];
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast-container", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `<div class="toast__private">
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">
                ${message}
            </p>
        </div>
    </div>
    <div class="toast__background" style="background-color: ${color};">
    </div>`;
    main.appendChild(toast);

    // Attach event listener to the close button
  }
}

const popupOverlay = document.getElementById("popup-overlay");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");

let confirmCallback = null;

function showConfirmPopup(title, message, onConfirm, onCancel) {
  popupTitle.innerText = title || "Confirm";
  popupMessage.innerText = message || "Are you sure?";
  popupOverlay.classList.add("show");

  // Xử lý nút Confirm
  const confirmButton = document.querySelector(".confirm-btn");
  confirmButton.onclick = () => {
    if (onConfirm) onConfirm(); // Gọi callback Xác nhận
    closePopup();
  };

  // Xử lý nút Cancel
  const cancelButton = document.querySelector(".cancel-btn");
  cancelButton.onclick = () => {
    if (onCancel) onCancel(); // Gọi callback Hủy (nếu cần)
    closePopup();
  };
}

function closePopup() {
  popupOverlay.classList.remove("show");
}

function closePopup() {
  popupOverlay.classList.remove("show");
}

function showAddNotePopup(onConfirm, onCancel) {
  const popupTitle = document.getElementById("popup-title");
  const popupMessage = document.getElementById("popup-message");
  const popupOverlay = document.getElementById("popup-overlay");

  popupTitle.innerText = "Thêm ghi chú";
  popupMessage.innerHTML =
    '<input type="text" id="noteInput" placeholder="Nhập ghi chú của bạn">';

  popupOverlay.classList.add("show");

  // Handle Confirm button
  const confirmButton = document.querySelector(".confirm-btn");
  confirmButton.onclick = () => {
    const noteInput = document.getElementById("noteInput").value;
    if (onConfirm) onConfirm(noteInput); // Pass the note input to the callback
    closePopup();
  };

  // Handle Cancel button
  const cancelButton = document.querySelector(".cancel-btn");
  cancelButton.onclick = () => {
    if (onCancel) onCancel(); // Call the cancel callback if provided
    closePopup();
  };
}

// Function to close the popup
function closePopup() {
  const popupOverlay = document.getElementById("popup-overlay");
  popupOverlay.classList.remove("show");
}
