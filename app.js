const pages = [
  { id: "list", eyebrow: "Page 1 of 4", title: "目前急診病人列表" },
  { id: "location", eyebrow: "Page 2 of 4", title: "病人位置追蹤" },
  { id: "staff", eyebrow: "Page 3 of 4", title: "值班分配與負責病人" },
  { id: "alerts", eyebrow: "Page 4 of 4", title: "離院提醒與外接通知" }
];

const staffDirectory = {
  nurse: [
    { id: "N-217", name: "黃怡安" },
    { id: "N-309", name: "林宗翰" },
    { id: "N-415", name: "陳品妤" }
  ],
  doctor: [
    { id: "D-044", name: "周柏翰" },
    { id: "D-118", name: "楊庭瑋" }
  ]
};

const floorWings = [
  { x: 8, y: 13, w: 68, h: 49 },
  { x: 78, y: 13, w: 8, h: 38 },
  { x: 64, y: 61, w: 23, h: 25 },
  { x: 28, y: 65, w: 34, h: 20 },
  { x: 27, y: 8, w: 8, h: 14 }
];

const corridors = [
  { x: 10, y: 34, w: 66, h: 16 },
  { x: 38, y: 27, w: 8, h: 35 },
  { x: 70, y: 31, w: 10, h: 43 },
  { x: 39, y: 59, w: 5, h: 27 },
  { x: 28, y: 9, w: 6, h: 43 },
  { x: 78, y: 35, w: 11, h: 10 }
];

const rooms = [
  { id: "mainExit", label: "主要出入口", short: "主入口", sub: "Main Entrance", x: 28, y: 9, w: 6, h: 12 },
  { id: "family", label: "家屬等候", sub: "Family Waiting", x: 10, y: 15, w: 17, h: 18 },
  { id: "lobby", label: "候診大廳", sub: "Lobby / Waiting", x: 10, y: 40, w: 18, h: 19 },
  { id: "resus", label: "急救處置", sub: "Resuscitation", x: 35, y: 15, w: 14, h: 14 },
  { id: "triage", label: "檢傷站", sub: "Triage", x: 30, y: 39, w: 13, h: 17 },
  { id: "nurseStation", label: "護理站", sub: "Nurse Station", x: 50, y: 15, w: 12, h: 17 },
  { id: "observation", label: "觀察床區", sub: "Observation", x: 45, y: 39, w: 17, h: 17 },
  { id: "consult", label: "診察室", sub: "Consult Rooms", x: 62, y: 39, w: 13, h: 17 },
  { id: "isolation", label: "隔離留觀", sub: "Isolation", x: 63, y: 15, w: 12, h: 17 },
  { id: "rightPassage", label: "院區通道", short: "通道", sub: "To Hospital Building", x: 77, y: 35, w: 7, h: 11 },
  { id: "exam", label: "檢查區", sub: "Exam / Imaging", x: 66, y: 63, w: 16, h: 19 },
  { id: "admin", label: "行政支援", sub: "Support", x: 30, y: 68, w: 31, h: 14 },
  { id: "ambulance", label: "救護入口", short: "救護", sub: "Ambulance Entry", x: 39, y: 62, w: 7, h: 22 }
];

const patientSeeds = [
  {
    mrn: "3429187",
    id: "ED-102",
    name: "陳○蓮",
    age: 82,
    sex: "女",
    triage: 2,
    flags: ["失智症"],
    diagnosis: "胸痛評估",
    roomId: "observation",
    bed: "觀察床 3",
    ble: { x: 52, y: 47 },
    nurseId: "N-217",
    doctorId: "D-044",
    arrivedMinutesAgo: 186,
    status: "in"
  },
  {
    mrn: "9182764",
    id: "ED-108",
    name: "王○明",
    age: 56,
    sex: "男",
    triage: 3,
    flags: [],
    diagnosis: "腹痛待檢",
    roomId: "consult",
    bed: "診察 2",
    ble: { x: 67, y: 47 },
    nurseId: "N-309",
    doctorId: "D-044",
    arrivedMinutesAgo: 74,
    status: "in"
  },
  {
    mrn: "5071936",
    id: "ED-113",
    name: "李○妍",
    age: 7,
    sex: "女",
    triage: 3,
    flags: ["小兒"],
    diagnosis: "發燒觀察",
    roomId: "family",
    bed: "家屬等候",
    ble: { x: 18, y: 23 },
    nurseId: "N-217",
    doctorId: "D-118",
    arrivedMinutesAgo: 49,
    status: "in"
  },
  {
    mrn: "7614208",
    id: "ED-119",
    name: "林○傑",
    age: 34,
    sex: "男",
    triage: 2,
    flags: ["身心科"],
    diagnosis: "急性焦慮",
    roomId: "isolation",
    bed: "隔離留觀 1",
    ble: { x: 69, y: 24 },
    nurseId: "N-415",
    doctorId: "D-118",
    arrivedMinutesAgo: 132,
    status: "in",
    calling: true
  },
  {
    mrn: "2856041",
    id: "ED-124",
    name: "張○華",
    age: 68,
    sex: "男",
    triage: 4,
    flags: [],
    diagnosis: "跌倒擦傷",
    roomId: "lobby",
    bed: "候診椅 A",
    ble: { x: 20, y: 48 },
    nurseId: "N-309",
    doctorId: "D-044",
    arrivedMinutesAgo: 38,
    status: "in"
  },
  {
    mrn: "6305149",
    id: "ED-130",
    name: "高○軒",
    age: 45,
    sex: "男",
    triage: 3,
    flags: [],
    diagnosis: "頭暈待檢",
    roomId: "mainExit",
    previousRoomId: "exam",
    previousBle: { x: 74, y: 72 },
    bed: "檢查區",
    ble: { x: 31, y: 15 },
    nurseId: "N-415",
    doctorId: "D-118",
    arrivedMinutesAgo: 214,
    status: "outside",
    leftAtMinutesAgo: 34
  },
  {
    mrn: "8047293",
    id: "ED-136",
    name: "吳○臻",
    age: 79,
    sex: "女",
    triage: 2,
    flags: ["失智症"],
    diagnosis: "意識混亂",
    roomId: "mainExit",
    previousRoomId: "triage",
    previousBle: { x: 36, y: 47 },
    bed: "檢傷站",
    ble: { x: 31, y: 15 },
    nurseId: "N-217",
    doctorId: "D-044",
    arrivedMinutesAgo: 96,
    status: "outside",
    leftAtMinutesAgo: 5
  }
];

const patients = patientSeeds.map((patient) => ({
  ...patient,
  homeRoomId: patient.previousRoomId || patient.roomId,
  homeBle: patient.previousBle || patient.ble,
  leftAt: patient.leftAtMinutesAgo ? new Date(Date.now() - patient.leftAtMinutesAgo * 60000) : null,
  arrivedAt: new Date(Date.now() - patient.arrivedMinutesAgo * 60000),
  urgentNotified: false,
  securityNotified: false,
  calling: Boolean(patient.calling)
}));

const state = {
  device: window.matchMedia("(max-width: 760px)").matches ? "mobile" : "desktop",
  page: "list",
  role: "overview",
  staffId: "",
  assignmentSort: "mine",
  selectedPatientId: patients[0].id,
  search: "",
  sidebarCollapsed: false,
  lastPayload: null
};

const notifications = [];

const els = {
  desktopView: document.querySelector("#desktopView"),
  mobileView: document.querySelector("#mobileView"),
  workspace: document.querySelector("#workspace"),
  collapseSidebar: document.querySelector("#collapseSidebar"),
  prevPage: document.querySelector("#prevPage"),
  nextPage: document.querySelector("#nextPage"),
  mobilePrevPage: document.querySelector("#mobilePrevPage"),
  mobileNextPage: document.querySelector("#mobileNextPage"),
  pageEyebrow: document.querySelector("#pageEyebrow"),
  pageTitle: document.querySelector("#pageTitle"),
  mobilePageEyebrow: document.querySelector("#mobilePageEyebrow"),
  mobilePageTitle: document.querySelector("#mobilePageTitle"),
  sideSummary: document.querySelector("#sideSummary"),
  patientSearch: document.querySelector("#patientSearch"),
  patientList: document.querySelector("#patientList"),
  mobilePatientList: document.querySelector("#mobilePatientList"),
  selectedCard: document.querySelector("#selectedCard"),
  mobileSelectedCard: document.querySelector("#mobileSelectedCard"),
  locationMap: document.querySelector("#locationMap"),
  mobileLocationMap: document.querySelector("#mobileLocationMap"),
  staffAssignments: document.querySelector("#staffAssignments"),
  mobileStaffAssignments: document.querySelector("#mobileStaffAssignments"),
  staffMap: document.querySelector("#staffMap"),
  mobileStaffMap: document.querySelector("#mobileStaffMap"),
  departureList: document.querySelector("#departureList"),
  notificationList: document.querySelector("#notificationList"),
  mobileAlerts: document.querySelector("#mobileAlerts"),
  webhookInput: document.querySelector("#webhookInput"),
  testWebhook: document.querySelector("#testWebhook"),
  payloadPreview: document.querySelector("#payloadPreview"),
  patientModal: document.querySelector("#patientModal"),
  modalTitle: document.querySelector("#modalTitle"),
  modalInfo: document.querySelector("#modalInfo"),
  modalMap: document.querySelector("#modalMap"),
  closeModal: document.querySelector("#closeModal"),
  toast: document.querySelector("#toast")
};

init();

function init() {
  bindEvents();
  evaluateGateRules();
  renderAll();
  setInterval(() => {
    evaluateGateRules();
    renderAll();
  }, 15000);
}

function bindEvents() {
  document.querySelectorAll("[data-device-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.device = button.dataset.deviceTab;
      renderAll();
    });
  });

  document.querySelectorAll("[data-role-tab]").forEach((button) => {
    button.addEventListener("click", () => setRole(button.dataset.roleTab));
  });

  document.querySelectorAll("[data-staff-select]").forEach((select) => {
    select.addEventListener("change", () => {
      state.staffId = select.value;
      renderAll();
    });
  });

  document.querySelectorAll("[data-assignment-sort]").forEach((select) => {
    select.addEventListener("change", () => {
      state.assignmentSort = select.value;
      renderAll();
    });
  });

  document.querySelectorAll("[data-jump-page]").forEach((button) => {
    button.addEventListener("click", () => setPage(button.dataset.jumpPage));
  });

  els.prevPage.addEventListener("click", () => shiftPage(-1));
  els.nextPage.addEventListener("click", () => shiftPage(1));
  els.mobilePrevPage.addEventListener("click", () => shiftPage(-1));
  els.mobileNextPage.addEventListener("click", () => shiftPage(1));
  els.collapseSidebar.addEventListener("click", () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    renderAll();
  });
  els.patientSearch.addEventListener("input", () => {
    state.search = els.patientSearch.value;
    renderPatientLists();
  });
  els.testWebhook.addEventListener("click", sendTestWebhook);
  els.closeModal.addEventListener("click", closeModal);
  els.patientModal.addEventListener("click", (event) => {
    if (event.target === els.patientModal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
  document.addEventListener("click", handleActionClick);
}

function handleActionClick(event) {
  const openPatientButton = event.target.closest("[data-open-patient]");
  if (openPatientButton) {
    openPatient(openPatientButton.dataset.openPatient);
    return;
  }

  const selectPatientButton = event.target.closest("[data-select-patient]");
  if (selectPatientButton) {
    selectPatient(selectPatientButton.dataset.selectPatient, true);
    return;
  }

  const callButton = event.target.closest("[data-toggle-call]");
  if (callButton) {
    toggleCall(callButton.dataset.toggleCall);
    return;
  }

  const assignButton = event.target.closest("[data-assign-to-me]");
  if (assignButton) {
    assignToMe(assignButton.dataset.assignToMe);
    return;
  }

  const leaveButton = event.target.closest("[data-simulate-leave]");
  if (leaveButton) {
    simulateLeave(leaveButton.dataset.simulateLeave);
    return;
  }

  const returnButton = event.target.closest("[data-return-patient]");
  if (returnButton) {
    returnPatient(returnButton.dataset.returnPatient);
    return;
  }

  const fastForwardButton = event.target.closest("[data-fast-forward]");
  if (fastForwardButton) {
    fastForwardDeparture(fastForwardButton.dataset.fastForward);
    return;
  }

  const dot = event.target.closest(".ble-dot[data-patient-id]");
  if (dot) {
    const patient = findPatient(dot.dataset.patientId);
    state.selectedPatientId = patient.id;
    showToast(`BLE 光點對應病人：${patient.id} ${patient.name}`);
    renderAll();
  }
}

function setRole(role) {
  state.role = role;
  if (role === "overview") {
    state.staffId = "";
  } else if (!staffDirectory[role].some((member) => member.id === state.staffId)) {
    state.staffId = staffDirectory[role][0].id;
  }
  renderAll();
}

function setPage(pageId) {
  state.page = pageId;
  renderAll();
}

function shiftPage(direction) {
  const currentIndex = pages.findIndex((page) => page.id === state.page);
  const nextIndex = Math.min(Math.max(currentIndex + direction, 0), pages.length - 1);
  setPage(pages[nextIndex].id);
}

function openPatient(patientId) {
  state.selectedPatientId = patientId;
  state.page = "location";
  renderAll();
  renderModal();
  els.patientModal.hidden = false;
}

function selectPatient(patientId, jumpToLocation = false) {
  state.selectedPatientId = patientId;
  if (jumpToLocation) state.page = "location";
  renderAll();
}

function closeModal() {
  els.patientModal.hidden = true;
}

function renderAll() {
  ensureSelectedPatient();
  renderDevice();
  renderRoleControls();
  renderStaffSelects();
  renderAssignmentSortControls();
  renderPageControls();
  renderSideSummary();
  renderPatientLists();
  renderSelectedCards();
  renderAssignments();
  renderAlerts();
  renderMaps();
  if (!els.patientModal.hidden) renderModal();
}

function renderDevice() {
  els.desktopView.classList.toggle("is-active", state.device === "desktop");
  els.mobileView.classList.toggle("is-active", state.device === "mobile");
  document.querySelectorAll("[data-device-tab]").forEach((button) => {
    const active = button.dataset.deviceTab === state.device;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  els.workspace.classList.toggle("is-collapsed", state.sidebarCollapsed);
  els.collapseSidebar.setAttribute("aria-expanded", String(!state.sidebarCollapsed));
  els.collapseSidebar.setAttribute("aria-label", state.sidebarCollapsed ? "展開側邊欄" : "收合側邊欄");
}

function renderRoleControls() {
  document.querySelectorAll("[data-role-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.roleTab === state.role);
  });
}

function renderStaffSelects() {
  const options = state.role === "overview"
    ? [{ id: "", name: "全體急診人員" }]
    : staffDirectory[state.role];

  document.querySelectorAll("[data-staff-select]").forEach((select) => {
    select.innerHTML = options
      .map((staff) => `<option value="${escapeHtml(staff.id)}">${escapeHtml(staff.id || "ALL")} ${escapeHtml(staff.name)}</option>`)
      .join("");
    select.disabled = state.role === "overview";
    select.value = state.staffId;
  });
}

function renderAssignmentSortControls() {
  document.querySelectorAll("[data-assignment-sort]").forEach((select) => {
    select.value = state.assignmentSort;
  });
}

function renderPageControls() {
  const currentIndex = pages.findIndex((page) => page.id === state.page);
  const current = pages[currentIndex];
  els.pageEyebrow.textContent = current.eyebrow;
  els.pageTitle.textContent = current.title;
  els.mobilePageEyebrow.textContent = current.eyebrow;
  els.mobilePageTitle.textContent = current.title;
  els.prevPage.disabled = currentIndex === 0;
  els.nextPage.disabled = currentIndex === pages.length - 1;
  els.mobilePrevPage.disabled = currentIndex === 0;
  els.mobileNextPage.disabled = currentIndex === pages.length - 1;

  document.querySelectorAll("[data-page-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.pagePanel === state.page);
  });
  document.querySelectorAll("[data-mobile-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.mobilePanel === state.page);
  });
  document.querySelectorAll("[data-jump-page]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.jumpPage === state.page);
  });
}

function renderSideSummary() {
  const inHospital = patients.filter((patient) => patient.status === "in").length;
  const outside = patients.filter((patient) => patient.status === "outside").length;
  const special = patients.filter(isSpecialPatient).length;
  const calling = patients.filter((patient) => patient.calling).length;

  els.sideSummary.innerHTML = [
    summaryRow("在院病人", `${inHospital} 位`),
    summaryRow("離院追蹤", `${outside} 位`),
    summaryRow("特殊標示", `${special} 位`),
    summaryRow("叫號中", `${calling} 件`)
  ].join("");
}

function renderPatientLists() {
  const list = filteredPatients();
  els.patientSearch.value = state.search;
  els.patientList.innerHTML = list.length
    ? patientTable(list)
    : emptyState("沒有符合搜尋條件的病人。");
  els.mobilePatientList.innerHTML = list.length
    ? list.map((patient) => patientCard(patient, true)).join("")
    : emptyState("沒有符合搜尋條件的病人。");
}

function renderSelectedCards() {
  const patient = getSelectedPatient();
  const card = selectedCard(patient);
  els.selectedCard.innerHTML = card;
  els.mobileSelectedCard.innerHTML = card;
}

function renderAssignments() {
  const visible = patientsForCurrentRole();
  const title = assignmentTitle();
  const html = visible.length
    ? visible.map((patient) => assignmentCard(patient)).join("")
    : emptyState(`${title}目前沒有負責病人。`);
  els.staffAssignments.innerHTML = html;
  els.mobileStaffAssignments.innerHTML = html;
}

function renderAlerts() {
  const outsidePatients = patients.filter((patient) => patient.status === "outside");
  els.departureList.innerHTML = outsidePatients.length
    ? outsidePatients.map((patient) => departureCard(patient)).join("")
    : emptyState("目前沒有病人從上方主要出入口離院。");

  const callCases = patients.filter((patient) => patient.calling).map((patient) => ({
    type: "calling",
    patientId: patient.id,
    title: "追蹤器震動中",
    message: `${patient.id} ${patient.name} 的追蹤器正在震動。`,
    activeCall: true
  }));
  const allNotifications = [...callCases, ...notifications];
  els.notificationList.innerHTML = allNotifications.length
    ? allNotifications.map((item) => notificationCard(item)).join("")
    : emptyState("尚未發送通知。");

  const mobileItems = [
    ...outsidePatients.map((patient) => departureCard(patient, true)),
    ...allNotifications.map((item) => notificationCard(item, true))
  ];
  els.mobileAlerts.innerHTML = mobileItems.length ? mobileItems.join("") : emptyState("目前沒有提醒。");
  renderPayloadPreview();
}

function renderMaps() {
  const selected = getSelectedPatient();
  renderMap(els.locationMap, [selected], selected.id);
  renderMap(els.mobileLocationMap, [selected], selected.id);
  renderMap(els.staffMap, patientsForCurrentRole(), selected.id);
  renderMap(els.mobileStaffMap, patientsForCurrentRole(), selected.id);
}

function renderMap(container, visiblePatients, selectedId) {
  const selected = findPatient(selectedId);
  const activeRoomId = selected.roomId;
  const patientSet = new Map(visiblePatients.map((patient) => [patient.id, patient]));
  const patientsToDraw = [...patientSet.values()];

  container.innerHTML = [
    ...floorWings.map((wing) => `<div class="floor-wing" style="${rectStyle(wing)}"></div>`),
    ...corridors.map((corridor) => `<div class="corridor" style="${rectStyle(corridor)}"></div>`),
    ...rooms.map((room) => roomHtml(room, room.id === activeRoomId)),
    `<div class="exit-marker" style="left:30%;top:7%;width:48px;height:48px;">主入口</div>`,
    `<div class="map-note" style="left:26%;top:3%;width:115px;">上方主要出入口</div>`,
    `<div class="map-note" style="left:79%;top:47%;width:90px;">院區通道</div>`,
    `<div class="map-note" style="left:38%;top:86%;width:90px;">救護入口</div>`,
    ...patientsToDraw.map((patient) => dotHtml(patient, patient.id === selectedId))
  ].join("");
}

function renderModal() {
  const patient = getSelectedPatient();
  els.modalTitle.textContent = `${patient.mrn} · ${patient.id} ${patient.name}`;
  els.modalInfo.innerHTML = selectedCard(patient, true);
  renderMap(els.modalMap, [patient], patient.id);
}

function patientTable(list) {
  return `
    <div class="patient-table-wrap">
      <table class="patient-table">
        <thead>
          <tr>
            <th>病歷號</th>
            <th>急診編號</th>
            <th>病人資訊</th>
            <th>位置</th>
            <th>在院時間</th>
            <th>負責人員</th>
            <th>狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${list.map((patient) => patientTableRow(patient)).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function patientTableRow(patient) {
  const selected = patient.id === state.selectedPatientId;
  const assignButton = state.role === "nurse"
    ? `<button class="mini-button primary" type="button" data-assign-to-me="${patient.id}">${patient.nurseId === state.staffId ? "已負責" : "指派給我"}</button>`
    : "";
  return `
    <tr class="${selected ? "is-selected" : ""}">
      <td class="mono-cell">${escapeHtml(patient.mrn)}</td>
      <td>
        <button class="patient-number compact" type="button" data-open-patient="${patient.id}" aria-label="開啟 ${patient.id} 定位">${patient.id}</button>
      </td>
      <td>
        <strong>${escapeHtml(patient.name)}</strong>
        <span>${patient.age} 歲 ${patient.sex} · ${escapeHtml(patient.diagnosis)}</span>
      </td>
      <td>
        <strong>${roomName(patient.roomId)}</strong>
        <span>BLE：${bleLabel(patient)}</span>
      </td>
      <td>${formatStay(patient)}</td>
      <td>
        <span>${staffLabel("nurse", patient.nurseId)}</span>
        <span>${staffLabel("doctor", patient.doctorId)}</span>
      </td>
      <td>
        ${statusBadge(patient)}
        <div class="table-tags">${patient.flags.map((flag) => `<span class="tag special">${escapeHtml(flag)}</span>`).join("")}</div>
      </td>
      <td>
        <div class="table-actions">
          <button class="mini-button ${patient.calling ? "danger" : ""}" type="button" data-toggle-call="${patient.id}">
            ${patient.calling ? "取消" : "叫號"}
          </button>
          <button class="mini-button" type="button" data-select-patient="${patient.id}">追蹤</button>
          ${assignButton}
        </div>
      </td>
    </tr>
  `;
}

function patientCard(patient, mobile = false) {
  const selected = patient.id === state.selectedPatientId;
  const cardClass = mobile ? "mobile-card" : "patient-card";
  const assignButton = state.role === "nurse"
    ? `<button class="mini-button primary" type="button" data-assign-to-me="${patient.id}">${patient.nurseId === state.staffId ? "已負責" : "指派給我"}</button>`
    : "";
  return `
    <article class="${cardClass}${selected ? " is-selected" : ""}">
      <div class="patient-main">
        <button class="patient-number" type="button" data-open-patient="${patient.id}" aria-label="開啟 ${patient.id} 定位">${patient.id}</button>
        <div class="patient-info">
          <strong>${escapeHtml(patient.mrn)} · ${escapeHtml(patient.name)}</strong>
          <p class="meta-line">${patient.age} 歲 ${patient.sex} · ${escapeHtml(patient.diagnosis)}</p>
          <p class="meta-line">RFID：${roomName(patient.roomId)} · BLE：${bleLabel(patient)}</p>
          <p class="meta-line">在院時間：${formatStay(patient)}</p>
        </div>
      </div>
      <div class="tag-row">
        ${statusBadge(patient)}
        <span class="tag triage">檢傷 ${patient.triage}</span>
        ${patient.flags.map((flag) => `<span class="tag special">${escapeHtml(flag)}</span>`).join("")}
      </div>
      <div class="button-row">
        <button class="mini-button ${patient.calling ? "danger" : ""}" type="button" data-toggle-call="${patient.id}">
          ${patient.calling ? "取消叫號" : "叫號震動"}
        </button>
        <button class="mini-button" type="button" data-select-patient="${patient.id}">追蹤位置</button>
        ${assignButton}
      </div>
    </article>
  `;
}

function selectedCard(patient, modal = false) {
  const outside = patient.status === "outside";
  return `
    <article class="selected-card">
      <div class="card-top">
        <div>
          <p class="section-kicker">${modal ? "Detail" : "Selected Patient"}</p>
          <h3>${escapeHtml(patient.mrn)} · ${patient.id} ${escapeHtml(patient.name)}</h3>
          <p class="meta-line">${patient.age} 歲 ${patient.sex} · ${escapeHtml(patient.diagnosis)}</p>
        </div>
        ${statusBadge(patient)}
      </div>
      <div class="tag-row">
        <span class="tag triage">檢傷 ${patient.triage}</span>
        ${patient.flags.map((flag) => `<span class="tag special">${escapeHtml(flag)}</span>`).join("") || `<span class="tag">一般追蹤</span>`}
      </div>
      <div class="info-grid">
        ${infoCell("RFID 房間", roomName(patient.roomId))}
        ${infoCell("BLE 訊號點", bleLabel(patient))}
        ${infoCell("在院時間", formatStay(patient))}
        ${infoCell("護理師", staffLabel("nurse", patient.nurseId))}
        ${infoCell("專責醫師", staffLabel("doctor", patient.doctorId))}
      </div>
      <div class="button-row">
        <button class="action-button ${patient.calling ? "danger" : "primary"}" type="button" data-toggle-call="${patient.id}">
          <span aria-hidden="true">⌁</span>
          ${patient.calling ? "取消叫號" : "叫號震動"}
        </button>
        ${outside
          ? `<button class="action-button" type="button" data-return-patient="${patient.id}">模擬返院</button>`
          : `<button class="action-button" type="button" data-simulate-leave="${patient.id}">模擬從上方主入口離院</button>`}
      </div>
    </article>
  `;
}

function assignmentCard(patient) {
  const mine = state.role === "nurse" && patient.nurseId === state.staffId
    || state.role === "doctor" && patient.doctorId === state.staffId;
  const ownershipTag = mine
    ? `<span class="tag special">我的病人</span>`
    : state.role === "nurse"
      ? `<span class="tag">其他護理負責</span>`
      : "";
  return `
    <article class="assignment-card">
      <div class="card-top">
        <strong>${escapeHtml(patient.mrn)} · ${patient.id} ${escapeHtml(patient.name)}</strong>
        ${statusBadge(patient)}
      </div>
      <div class="tag-row">
        ${ownershipTag}
        ${patient.flags.map((flag) => `<span class="tag special">${escapeHtml(flag)}</span>`).join("")}
      </div>
      <p class="meta-line">RFID：${roomName(patient.roomId)} · BLE：${bleLabel(patient)}</p>
      <p class="meta-line">在院時間：${formatStay(patient)}</p>
      <p class="meta-line">護理師 ${staffLabel("nurse", patient.nurseId)} · 醫師 ${staffLabel("doctor", patient.doctorId)}</p>
      <div class="button-row">
        <button class="mini-button" type="button" data-select-patient="${patient.id}">在地圖標示</button>
        <button class="mini-button ${patient.calling ? "danger" : ""}" type="button" data-toggle-call="${patient.id}">
          ${patient.calling ? "取消叫號" : "叫號"}
        </button>
      </div>
    </article>
  `;
}

function departureCard(patient, mobile = false) {
  const minutes = elapsedMinutes(patient.leftAt);
  const warning = minutes >= 30 || isSpecialPatient(patient);
  return `
    <article class="${mobile ? "mobile-card" : "departure-card"}">
      <div class="card-top">
        <strong>${escapeHtml(patient.mrn)} · ${patient.id} ${escapeHtml(patient.name)}</strong>
        <span class="timer-pill ${warning ? "warning" : ""}">${minutes} 分鐘</span>
      </div>
      <p class="meta-line">RFID 已在上方主要出入口偵測離院，離院時間 ${formatClock(patient.leftAt)}。在院時間：${formatStay(patient)}。</p>
      <div class="tag-row">
        ${patient.flags.map((flag) => `<span class="tag special">${escapeHtml(flag)}</span>`).join("") || `<span class="tag">一般病人</span>`}
        ${patient.securityNotified ? `<span class="tag special">已通知保安</span>` : ""}
        ${patient.urgentNotified ? `<span class="tag special">已立即提醒</span>` : ""}
      </div>
      <div class="button-row">
        <button class="mini-button" type="button" data-select-patient="${patient.id}">查看出口位置</button>
        <button class="mini-button" type="button" data-fast-forward="${patient.id}">快轉 30 分鐘</button>
        <button class="mini-button" type="button" data-return-patient="${patient.id}">模擬返院</button>
      </div>
    </article>
  `;
}

function notificationCard(item, mobile = false) {
  return `
    <article class="${mobile ? "mobile-card" : "notification-card"} ${item.type}">
      <div class="card-top">
        <strong>${escapeHtml(item.title)}</strong>
        <span class="timer-pill">${item.time ? formatClock(item.time) : "即時"}</span>
      </div>
      <p class="meta-line">${escapeHtml(item.message)}</p>
      ${item.activeCall ? `
        <div class="button-row">
          <button class="mini-button danger" type="button" data-toggle-call="${item.patientId}">取消叫號</button>
        </div>
      ` : ""}
    </article>
  `;
}

function roomHtml(room, active) {
  const compact = room.w <= 8 || room.h <= 12;
  return `
    <div class="room ${active ? "active-rfid" : ""} ${compact ? "is-compact" : ""}" style="${rectStyle(room)}" title="${escapeHtml(room.label)} ${escapeHtml(room.sub)}">
      <strong>${escapeHtml(compact && room.short ? room.short : room.label)}</strong>
      <span>${escapeHtml(room.sub)}</span>
    </div>
  `;
}

function dotHtml(patient, selected) {
  const classes = [
    "ble-dot",
    selected ? "is-selected" : "",
    isSpecialPatient(patient) ? "is-special" : "",
    patient.calling ? "is-calling" : "",
    patient.status === "outside" ? "is-outside" : ""
  ].filter(Boolean).join(" ");
  return `
    <button class="${classes}" type="button" style="left:${patient.ble.x}%;top:${patient.ble.y}%;" data-patient-id="${patient.id}" aria-label="BLE 光點 ${patient.id}">
      <span>${patient.id}</span>
    </button>
  `;
}

function evaluateGateRules() {
  patients.forEach((patient) => {
    if (patient.status !== "outside" || !patient.leftAt) return;
    const minutes = elapsedMinutes(patient.leftAt);

    if (isSpecialPatient(patient) && !patient.urgentNotified) {
      const payload = buildPayload("high_risk_gate_exit", patient, minutes);
      patient.urgentNotified = true;
      sendExternalMessage("high_risk_gate_exit", payload);
      addNotification({
        type: "urgent",
        patientId: patient.id,
        title: "特殊病人離院立即提醒",
        message: `${patient.id} ${patient.name} 屬於 ${patient.flags.join("、")}，已在上方主要出入口離院，系統已立即標示提醒。`,
        payload
      });
    }

    if (minutes >= 30 && !patient.securityNotified) {
      const payload = buildPayload("patient_away_30m", patient, minutes);
      patient.securityNotified = true;
      sendExternalMessage("patient_away_30m", payload);
      addNotification({
        type: "security",
        patientId: patient.id,
        title: "已發送保安通知",
        message: `${patient.id} ${patient.name} 已離開上方主要出入口 ${minutes} 分鐘，系統已產生保安通知。`,
        payload
      });
    }
  });
}

function addNotification(notification) {
  const key = `${notification.type}-${notification.patientId}-${notification.title}`;
  if (notifications.some((item) => item.key === key)) return;
  notifications.unshift({
    ...notification,
    key,
    time: new Date()
  });
}

function sendExternalMessage(kind, payload) {
  state.lastPayload = {
    method: "POST",
    endpoint: els.webhookInput?.value || "/api/security-alerts",
    adapter: "sendExternalMessage(kind, payload)",
    kind,
    payload
  };
}

function sendTestWebhook() {
  const patient = getSelectedPatient();
  const payload = buildPayload("demo_test", patient, elapsedMinutes(patient.leftAt));
  sendExternalMessage("demo_test", payload);
  addNotification({
    type: "security",
    patientId: patient.id,
    title: "已產生測試通知",
    message: `${patient.id} 的測試 payload 已送到外接通路預覽。`,
    payload
  });
  renderAll();
  showToast("已產生外接通路測試 payload");
}

function buildPayload(eventType, patient, minutesAway) {
  return {
    eventType,
    patientId: patient.id,
    patientName: patient.name,
    riskTags: patient.flags,
    rfidRoom: roomName(patient.roomId),
    exit: "上方主要出入口",
    blePoint: bleLabel(patient),
    minutesAway: Number.isFinite(minutesAway) ? minutesAway : 0,
    nurseId: patient.nurseId,
    doctorId: patient.doctorId,
    createdAt: new Date().toISOString()
  };
}

function renderPayloadPreview() {
  const preview = state.lastPayload || {
    method: "POST",
    endpoint: els.webhookInput?.value || "/api/security-alerts",
    adapter: "sendExternalMessage(kind, payload)",
    payload: {
      eventType: "patient_away_30m",
      patientId: "ED-000",
      exit: "上方主要出入口"
    }
  };
  els.payloadPreview.textContent = JSON.stringify(preview, null, 2);
}

function toggleCall(patientId) {
  const patient = findPatient(patientId);
  patient.calling = !patient.calling;
  if (patient.calling) {
    const payload = buildPayload("tracker_vibration_request", patient, elapsedMinutes(patient.leftAt));
    sendExternalMessage("tracker_vibration_request", payload);
    showToast(`${patient.id} 追蹤器開始震動`);
  } else {
    showToast(`${patient.id} 已取消叫號`);
  }
  renderAll();
}

function assignToMe(patientId) {
  if (state.role !== "nurse" || !state.staffId) return;
  const patient = findPatient(patientId);
  patient.nurseId = state.staffId;
  showToast(`${patient.id} 已指派給 ${staffLabel("nurse", state.staffId)}`);
  renderAll();
}

function simulateLeave(patientId) {
  const patient = findPatient(patientId);
  if (patient.status !== "outside") {
    patient.previousRoomId = patient.roomId;
    patient.previousBle = patient.ble;
  }
  patient.status = "outside";
  patient.roomId = "mainExit";
  patient.ble = { x: 31, y: 15 };
  patient.leftAt = new Date();
  patient.securityNotified = false;
  patient.urgentNotified = false;
  state.selectedPatientId = patient.id;
  state.page = "alerts";
  evaluateGateRules();
  showToast(`${patient.id} 已模擬從上方主要出入口離院`);
  renderAll();
}

function returnPatient(patientId) {
  const patient = findPatient(patientId);
  patient.status = "in";
  patient.roomId = patient.previousRoomId || patient.homeRoomId;
  patient.ble = patient.previousBle || patient.homeBle;
  patient.leftAt = null;
  patient.securityNotified = false;
  patient.urgentNotified = false;
  state.selectedPatientId = patient.id;
  showToast(`${patient.id} 已模擬返院`);
  renderAll();
}

function fastForwardDeparture(patientId) {
  const patient = findPatient(patientId);
  patient.leftAt = new Date(Date.now() - 31 * 60000);
  evaluateGateRules();
  showToast(`${patient.id} 已快轉到離院 31 分鐘`);
  renderAll();
}

function filteredPatients() {
  const query = state.search.trim().toLowerCase();
  const ordered = [...patients].sort((a, b) => statusOrder(a) - statusOrder(b) || a.id.localeCompare(b.id));
  if (!query) return ordered;
  return ordered.filter((patient) => {
    const haystack = [
      patient.id,
      patient.mrn,
      patient.name,
      patient.diagnosis,
      roomName(patient.roomId),
      patient.flags.join(" ")
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function patientsForCurrentRole() {
  let list = [...patients];
  if (state.role === "nurse" && state.staffId) {
    return sortAssignmentPatients(list, "nurseId");
  }
  if (state.role === "doctor" && state.staffId) {
    list = patients.filter((patient) => patient.doctorId === state.staffId);
    return sortAssignmentPatients(list, "doctorId");
  }
  return sortAssignmentPatients(list, null);
}

function sortAssignmentPatients(list, ownerKey) {
  return [...list].sort((a, b) => {
    if (state.assignmentSort === "mine" && ownerKey && state.staffId) {
      const aMine = a[ownerKey] === state.staffId ? 0 : 1;
      const bMine = b[ownerKey] === state.staffId ? 0 : 1;
      if (aMine !== bMine) return aMine - bMine;
      return statusOrder(a) - statusOrder(b) || a.id.localeCompare(b.id);
    }

    if (state.assignmentSort === "arrival") {
      return a.arrivedAt.getTime() - b.arrivedAt.getTime() || a.id.localeCompare(b.id);
    }

    return a.id.localeCompare(b.id);
  });
}

function assignmentTitle() {
  if (state.role === "nurse") return `${staffLabel("nurse", state.staffId)} `;
  if (state.role === "doctor") return `${staffLabel("doctor", state.staffId)} `;
  return "急診總覽";
}

function ensureSelectedPatient() {
  if (!patients.some((patient) => patient.id === state.selectedPatientId)) {
    state.selectedPatientId = patients[0].id;
  }
}

function getSelectedPatient() {
  return findPatient(state.selectedPatientId);
}

function findPatient(patientId) {
  return patients.find((patient) => patient.id === patientId) || patients[0];
}

function isSpecialPatient(patient) {
  return patient.flags.some((flag) => ["失智症", "小兒", "身心科"].includes(flag));
}

function statusOrder(patient) {
  if (patient.status === "outside") return 0;
  if (isSpecialPatient(patient)) return 1;
  return 2;
}

function statusBadge(patient) {
  if (patient.status === "outside") return `<span class="status-badge outside">離院追蹤</span>`;
  if (isSpecialPatient(patient)) return `<span class="status-badge watch">特殊標示</span>`;
  return `<span class="status-badge">在院</span>`;
}

function roomName(roomId) {
  return rooms.find((room) => room.id === roomId)?.label || roomId;
}

function bleLabel(patient) {
  return `${Math.round(patient.ble.x)} / ${Math.round(patient.ble.y)} 訊號點`;
}

function formatStay(patient) {
  const minutes = stayMinutes(patient);
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const suffix = patient.status === "outside" ? "（離院前）" : "";
  if (hours <= 0) return `${mins} 分${suffix}`;
  if (mins === 0) return `${hours} 小時${suffix}`;
  return `${hours} 小時 ${mins} 分${suffix}`;
}

function stayMinutes(patient) {
  const endTime = patient.status === "outside" && patient.leftAt ? patient.leftAt : new Date();
  return Math.max(0, Math.floor((endTime.getTime() - patient.arrivedAt.getTime()) / 60000));
}

function staffLabel(role, staffId) {
  const staff = staffDirectory[role].find((member) => member.id === staffId);
  return staff ? `${staff.id} ${staff.name}` : "未指派";
}

function summaryRow(label, value) {
  return `<div class="summary-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function infoCell(label, value) {
  return `<div class="info-cell"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function emptyState(text) {
  return `<p class="empty-state">${escapeHtml(text)}</p>`;
}

function rectStyle(item) {
  return `left:${item.x}%;top:${item.y}%;width:${item.w}%;height:${item.h}%;`;
}

function elapsedMinutes(date) {
  if (!date) return 0;
  return Math.max(0, Math.floor((Date.now() - date.getTime()) / 60000));
}

function formatClock(date) {
  if (!date) return "--:--";
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

let toastTimer = null;
function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 1900);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => registration.update())
      .catch(() => {});
  });
}
