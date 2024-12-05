function renderUsers() {
  const tbody = document.querySelector("#users tbody");
  tbody.innerHTML = "";

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  paginatedUsers.forEach((user) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = user.id;
    tr.appendChild(tdId);

    const tdUsername = document.createElement("td");
    tdUsername.textContent = user.username;
    tr.appendChild(tdUsername);

    const tdEmail = document.createElement("td");
    tdEmail.textContent = user.email;
    tr.appendChild(tdEmail);

    const tdStatus = document.createElement("td");
    tdStatus.textContent = user.status;
    tr.appendChild(tdStatus);

    const tdType = document.createElement("td");
    tdType.textContent = user.type;
    tr.appendChild(tdType);

    const tdActions = document.createElement("td");

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Sửa";
    editBtn.classList.add("btn", "btn-secondary");
    editBtn.onclick = () => editUser(user.id);
    tdActions.appendChild(editBtn);

    // Lock/Unlock Button
    const lockBtn = document.createElement("button");
    lockBtn.textContent = user.status === "Hoạt động" ? "Khóa" : "Mở Khóa";
    lockBtn.classList.add(
      "btn",
      user.status === "Hoạt động" ? "btn-warning" : "btn-success"
    );
    lockBtn.onclick = () => toggleLockUser(user.id);
    tdActions.appendChild(lockBtn);

    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });

  renderPagination();
}
