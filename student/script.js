// Global state
let currentTheme = "light"
let isEditingProfile = false
let selectedSubject = ""
let uploadType = ""

// Student data
const studentProfile = {
  name: "Name",
  age: 16,
  birthday: "March 15, 2008",
  contact: "+91 98345 87293",
  email: "emma.johnson@school.edu",
  grade: "Grade 11",
  studentId: "STU2024001",
  address: "123 Oak Street, Springfield",
  emergencyContact: "Sarah Johnson - +1 (555) 987-6543",
}

const badges = [
  {
    id: 1,
    name: "Academic Excellence",
    type: "Gold",
    subject: "Mathematics",
    date: "2024-01-15",
    description: "Scored 95%+ in final exam",
  },
  {
    id: 2,
    name: "Perfect Attendance",
    type: "Silver",
    subject: "General",
    date: "2024-02-01",
    description: "No absences for 3 months",
  },
  {
    id: 3,
    name: "Science Fair Winner",
    type: "Gold",
    subject: "Science",
    date: "2024-01-20",
    description: "1st place in regional science fair",
  },
  {
    id: 4,
    name: "Creative Writing",
    type: "Bronze",
    subject: "English",
    date: "2024-02-10",
    description: "Outstanding essay submission",
  },
  {
    id: 5,
    name: "Team Player",
    type: "Silver",
    subject: "Sports",
    date: "2024-01-30",
    description: "Excellent teamwork in group projects",
  },
  {
    id: 6,
    name: "Leadership",
    type: "Gold",
    subject: "General",
    date: "2024-02-05",
    description: "Led successful class presentation",
  },
]

const progressData = {
  overall: 78,
  subjects: [
    { name: "Mathematics", progress: 85, assignments: 12, completed: 10 },
    { name: "Science", progress: 92, assignments: 10, completed: 9 },
    { name: "English", progress: 76, assignments: 8, completed: 6 },
    { name: "History", progress: 68, assignments: 9, completed: 6 },
    { name: "Art", progress: 88, assignments: 6, completed: 5 },
  ],
}

const marksData = [
  {
    subject: "Mathematics",
    assignments: [
      { name: "Algebra Quiz", marks: 18, total: 20, date: "2024-01-15" },
      { name: "Geometry Test", marks: 45, total: 50, date: "2024-01-22" },
      { name: "Calculus Assignment", marks: 28, total: 30, date: "2024-02-01" },
    ],
  },
  {
    subject: "Science",
    assignments: [
      { name: "Physics Lab Report", marks: 38, total: 40, date: "2024-01-18" },
      { name: "Chemistry Quiz", marks: 23, total: 25, date: "2024-01-25" },
      { name: "Biology Project", marks: 47, total: 50, date: "2024-02-03" },
    ],
  },
  {
    subject: "English",
    assignments: [
      { name: "Essay Writing", marks: 42, total: 50, date: "2024-01-20" },
      { name: "Literature Analysis", marks: 35, total: 40, date: "2024-01-28" },
      { name: "Grammar Test", marks: 18, total: 20, date: "2024-02-05" },
    ],
  },
  {
    subject: "History",
    assignments: [
      { name: "World War II Essay", marks: 36, total: 40, date: "2024-01-17" },
      { name: "Timeline Project", marks: 28, total: 35, date: "2024-01-24" },
      { name: "Research Paper", marks: 41, total: 50, date: "2024-02-02" },
    ],
  },
  {
    subject: "Art",
    assignments: [
      { name: "Portrait Drawing", marks: 27, total: 30, date: "2024-01-19" },
      { name: "Color Theory", marks: 22, total: 25, date: "2024-01-26" },
      { name: "Sculpture Project", marks: 38, total: 40, date: "2024-02-04" },
    ],
  },
]

const assignmentFeedback = [
  {
    subject: "Mathematics",
    assignment: "Algebra Quiz",
    grade: "A-",
    comment:
      "Excellent work on quadratic equations. Minor error in problem 3, but overall strong understanding demonstrated.",
    teacher: "Mr. Smith",
    date: "2024-01-16",
  },
  {
    subject: "Science",
    assignment: "Physics Lab Report",
    grade: "A",
    comment:
      "Outstanding lab technique and data analysis. Your hypothesis was well-formed and conclusions were supported by evidence.",
    teacher: "Dr. Wilson",
    date: "2024-01-19",
  },
  {
    subject: "English",
    assignment: "Essay Writing",
    grade: "B+",
    comment: "Good argument structure and use of evidence. Work on transitions between paragraphs for better flow.",
    teacher: "Ms. Davis",
    date: "2024-01-21",
  },
  {
    subject: "History",
    assignment: "World War II Essay",
    grade: "A-",
    comment: "Thorough research and good analysis of primary sources. Consider exploring more diverse perspectives.",
    teacher: "Mr. Brown",
    date: "2024-01-18",
  },
  {
    subject: "Art",
    assignment: "Portrait Drawing",
    grade: "A",
    comment: "Exceptional attention to detail and shading technique. Your proportions are very accurate.",
    teacher: "Ms. Garcia",
    date: "2024-01-20",
  },
]

let todoItems = [
  { id: 1, task: "Complete Math Assignment #5", due: "Tomorrow", completed: false },
  { id: 2, task: "Science Lab Report", due: "Friday", completed: false },
  { id: 3, task: "English Essay Draft", due: "Next Week", completed: true },
  { id: 4, task: "History Research Project", due: "Monday", completed: false },
  { id: 5, task: "Art Portfolio Submission", due: "Next Friday", completed: false },
]

// Theme functions
function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  document.body.className = currentTheme + "-theme"

  const themeIcon = document.getElementById("theme-icon")
  themeIcon.className = currentTheme === "light" ? "fas fa-moon" : "fas fa-sun"
}

// Status functions
function closeStatus() {
  document.getElementById("status-card").style.display = "none"
}

// Dropdown functions
function toggleDropdown(id) {
  const dropdown = document.getElementById(id)
  dropdown.classList.toggle("show")

  // Close other dropdowns
  document.querySelectorAll(".dropdown-content").forEach((dd) => {
    if (dd.id !== id) dd.classList.remove("show")
  })
}

// Subject functions
function openSubject(subjectName) {
  selectedSubject = subjectName
  document.getElementById("selected-subject").textContent = subjectName
  document.getElementById("upload-type-selection").style.display = "block"
  document.getElementById("file-upload-section").style.display = "none"
  openModal("upload-modal")
}

function toggleSubjectMenu(button) {
  const dropdown = button.nextElementSibling
  dropdown.classList.toggle("show")

  // Close other subject dropdowns
  document.querySelectorAll(".subject-dropdown").forEach((dd) => {
    if (dd !== dropdown) dd.classList.remove("show")
  })
}

function changePhoto(element) {
  const card = element.closest(".subject-card")
  const img = card.querySelector(".subject-image img")
  const subject = card.dataset.subject

  // Generate new placeholder image
  img.src = `/placeholder.svg?height=200&width=400&query=aesthetic ${subject} study space with soft lighting`

  // Close dropdown
  element.closest(".subject-dropdown").classList.remove("show")
}

function changeColor(element) {
  const card = element.closest(".subject-card")
  const colors = ["#fef3c7", "#dcfce7", "#e0e7ff", "#fed7aa", "#fce7f3", "#fef9c3", "#fee2e2"]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  card.style.backgroundColor = randomColor

  // Close dropdown
  element.closest(".subject-dropdown").classList.remove("show")
}

// Upload functions
function selectUploadType(type) {
  uploadType = type
  document.getElementById("upload-type-selection").style.display = "none"
  document.getElementById("file-upload-section").style.display = "block"
  document.getElementById("upload-type-badge").textContent = type.toUpperCase()
  document.getElementById("upload-type-text").textContent = type
}

function backToTypeSelection() {
  document.getElementById("upload-type-selection").style.display = "block"
  document.getElementById("file-upload-section").style.display = "none"
  uploadType = ""
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    alert(`File "${file.name}" uploaded successfully for ${uploadType} assignment in ${selectedSubject}!`)
    closeModal("upload-modal")
    uploadType = ""
  }
}

// Todo functions
function toggleAddTask() {
  const form = document.getElementById("add-task-form")
  const icon = document.getElementById("add-icon")

  if (form.style.display === "none" || !form.style.display) {
    form.style.display = "block"
    icon.style.transform = "rotate(45deg)"
  } else {
    form.style.display = "none"
    icon.style.transform = "rotate(0deg)"
    // Clear form
    document.getElementById("new-task").value = ""
    document.getElementById("new-due").value = ""
  }
}

function addTask() {
  const taskInput = document.getElementById("new-task")
  const dueInput = document.getElementById("new-due")

  if (taskInput.value.trim()) {
    const newId = Math.max(...todoItems.map((t) => t.id)) + 1
    todoItems.push({
      id: newId,
      task: taskInput.value,
      due: dueInput.value || "No due date",
      completed: false,
    })

    renderTodoList()
    toggleAddTask()
  }
}

function toggleTodoItem(id) {
  const item = todoItems.find((t) => t.id === id)
  if (item) {
    item.completed = !item.completed
    renderTodoList()
  }
}

function removeTask(id) {
  todoItems = todoItems.filter((t) => t.id !== id)
  renderTodoList()
}

function renderTodoList() {
  const todoList = document.getElementById("todo-list")
  todoList.innerHTML = ""

  todoItems.forEach((item) => {
    const todoItem = document.createElement("div")
    todoItem.className = "todo-item"
    todoItem.innerHTML = `
            <div class="todo-content">
                <input type="checkbox" class="todo-checkbox" ${item.completed ? "checked" : ""} 
                       onchange="toggleTodoItem(${item.id})">
                <div class="todo-text">
                    <p class="todo-task ${item.completed ? "completed" : ""}">${item.task}</p>
                    <p class="todo-due">Due: ${item.due}</p>
                </div>
                <button class="todo-remove" onclick="removeTask(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `
    todoList.appendChild(todoItem)
  })
}

function viewAllAssignments() {
  alert("View All Assignments functionality would be implemented here")
}

// Profile functions
function openProfileModal() {
  populateProfileModal()
  openModal("profile-modal")
}

function editProfile() {
  toggleEditProfile()
  openModal("profile-modal")
}

function toggleEditProfile() {
  isEditingProfile = !isEditingProfile

  const spans = document.querySelectorAll('#profile-modal span[id^="profile-"]')
  const inputs = document.querySelectorAll('#profile-modal input[id^="edit-"], #profile-modal textarea[id^="edit-"]')
  const editActions = document.getElementById("edit-actions")
  const editBtn = document.getElementById("edit-profile-btn")

  if (isEditingProfile) {
    spans.forEach((span) => (span.style.display = "none"))
    inputs.forEach((input) => {
      input.style.display = "block"
      // Populate with current values
      const fieldName = input.id.replace("edit-", "")
      if (fieldName === "name") input.value = studentProfile.name
      else if (fieldName === "age") input.value = studentProfile.age
      else if (fieldName === "birthday") input.value = studentProfile.birthday
      else if (fieldName === "contact") input.value = studentProfile.contact
      else if (fieldName === "id") input.value = studentProfile.studentId
      else if (fieldName === "email") input.value = studentProfile.email
      else if (fieldName === "address") input.value = studentProfile.address
      else if (fieldName === "emergency") input.value = studentProfile.emergencyContact
    })
    editActions.style.display = "flex"
    editBtn.style.display = "none"
  } else {
    spans.forEach((span) => (span.style.display = "block"))
    inputs.forEach((input) => (input.style.display = "none"))
    editActions.style.display = "none"
    editBtn.style.display = "block"
  }
}

function saveProfile() {
  // Update profile data
  studentProfile.name = document.getElementById("edit-name").value
  studentProfile.age = Number.parseInt(document.getElementById("edit-age").value)
  studentProfile.birthday = document.getElementById("edit-birthday").value
  studentProfile.contact = document.getElementById("edit-contact").value
  studentProfile.studentId = document.getElementById("edit-id").value
  studentProfile.email = document.getElementById("edit-email").value
  studentProfile.address = document.getElementById("edit-address").value
  studentProfile.emergencyContact = document.getElementById("edit-emergency").value

  // Update UI
  document.getElementById("student-name").textContent = studentProfile.name
  populateProfileModal()
  toggleEditProfile()
}

function cancelEdit() {
  toggleEditProfile()
}

function populateProfileModal() {
  document.getElementById("profile-name").textContent = studentProfile.name
  document.getElementById("profile-age").textContent = `${studentProfile.age} years old`
  document.getElementById("profile-birthday").textContent = studentProfile.birthday
  document.getElementById("profile-contact").textContent = studentProfile.contact
  document.getElementById("profile-id").textContent = studentProfile.studentId
  document.getElementById("profile-email").textContent = studentProfile.email
  document.getElementById("profile-address").textContent = studentProfile.address
  document.getElementById("profile-emergency").textContent = studentProfile.emergencyContact
}

// Modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.add("show")
  modal.style.display = "flex"
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.remove("show")
  setTimeout(() => {
    modal.style.display = "none"
  }, 300)
}

// Badge functions
function openBadgesModal() {
  populateBadgesModal()
  openModal("badges-modal")
}

function populateBadgesModal() {
  const badgesGrid = document.getElementById("badges-grid")
  badgesGrid.innerHTML = ""

  badges.forEach((badge) => {
    const badgeCard = document.createElement("div")
    badgeCard.className = "badge-card"
    badgeCard.innerHTML = `
            <div class="badge-header">
                <i class="fas fa-award badge-icon ${badge.type.toLowerCase()}"></i>
                <div class="badge-info">
                    <h3>
                        ${badge.name}
                        <span class="badge-type ${badge.type.toLowerCase()}">${badge.type}</span>
                    </h3>
                    <p class="badge-subject">${badge.subject}</p>
                    <p class="badge-description">${badge.description}</p>
                    <p class="badge-date">Earned: ${badge.date}</p>
                </div>
            </div>
        `
    badgesGrid.appendChild(badgeCard)
  })
}

// Progress functions
function openProgressModal() {
  populateProgressModal()
  openModal("progress-modal")
}

function populateProgressModal() {
  const subjectProgress = document.getElementById("subject-progress")
  subjectProgress.innerHTML = "<h3>Subject Progress</h3>"

  progressData.subjects.forEach((subject) => {
    const progressItem = document.createElement("div")
    progressItem.className = "progress-item"
    progressItem.innerHTML = `
            <div class="progress-header">
                <h4>${subject.name}</h4>
                <span class="progress-stats">${subject.completed}/${subject.assignments} assignments</span>
            </div>
            <div class="progress-bar small">
                <div class="progress-fill" style="width: ${subject.progress}%"></div>
            </div>
            <p class="progress-percentage">${subject.progress}% Complete</p>
        `
    subjectProgress.appendChild(progressItem)
  })
}

// Marks functions
function openMarksModal() {
  populateMarksModal()
  openModal("marks-modal")
}

function populateMarksModal() {
  const marksContent = document.getElementById("marks-content")
  marksContent.innerHTML = ""

  marksData.forEach((subjectData) => {
    const subjectMarks = document.createElement("div")
    subjectMarks.className = "subject-marks"

    let assignmentsList = ""
    let totalMarks = 0
    let totalPossible = 0

    subjectData.assignments.forEach((assignment) => {
      totalMarks += assignment.marks
      totalPossible += assignment.total
      const percentage = Math.round((assignment.marks / assignment.total) * 100)

      assignmentsList += `
                <div class="assignment-item">
                    <div class="assignment-info">
                        <h4>${assignment.name}</h4>
                        <p class="assignment-date">${assignment.date}</p>
                    </div>
                    <div class="assignment-score">
                        <p class="assignment-marks">${assignment.marks}/${assignment.total}</p>
                        <p class="assignment-percentage">${percentage}%</p>
                    </div>
                </div>
            `
    })

    const totalPercentage = Math.round((totalMarks / totalPossible) * 100)

    subjectMarks.innerHTML = `
            <h3>${subjectData.subject}</h3>
            <div class="assignment-list">
                ${assignmentsList}
            </div>
            <div class="subject-total">
                <p>Total: ${totalMarks}/${totalPossible} (${totalPercentage}%)</p>
            </div>
        `

    marksContent.appendChild(subjectMarks)
  })
}

// Feedback functions
function openFeedbackModal() {
  populateFeedbackModal()
  openModal("feedback-modal")
}

function populateFeedbackModal() {
  const feedbackContent = document.getElementById("feedback-content")
  feedbackContent.innerHTML = ""

  assignmentFeedback.forEach((feedback) => {
    const feedbackCard = document.createElement("div")
    feedbackCard.className = "feedback-card"
    feedbackCard.innerHTML = `
            <div class="feedback-header">
                <div class="feedback-title">
                    <h3>${feedback.subject} - ${feedback.assignment}</h3>
                    <p class="feedback-teacher">Teacher: ${feedback.teacher}</p>
                </div>
                <div class="feedback-grade-info">
                    <span class="feedback-grade">${feedback.grade}</span>
                    <p class="feedback-date">${feedback.date}</p>
                </div>
            </div>
            <div class="feedback-comment">
                "${feedback.comment}"
            </div>
        `
    feedbackContent.appendChild(feedbackCard)
  })
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  renderTodoList()

  // Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown") && !event.target.closest(".subject-menu")) {
      document.querySelectorAll(".dropdown-content, .subject-dropdown").forEach((dd) => {
        dd.classList.remove("show")
      })
    }
  })

  // Close modals when clicking outside
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal.id)
      }
    })
  })
})