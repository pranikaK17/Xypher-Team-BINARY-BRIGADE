// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem("theme") || "light"
    this.init()
  }

  init() {
    this.applyTheme()
    document.getElementById("themeToggle").addEventListener("click", () => this.toggleTheme())
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light"
    this.applyTheme()
    localStorage.setItem("theme", this.theme)
  }

  applyTheme() {
    document.body.classList.toggle("dark", this.theme === "dark")
    const icon = document.querySelector("#themeToggle i")
    icon.className = this.theme === "dark" ? "fas fa-sun" : "fas fa-moon"
  }
}

// Student Data Management
class StudentManager {
  constructor() {
    this.sections = {
      A: this.generateStudents("A"),
      B: this.generateStudents("B"),
      C: this.generateStudents("C"),
      D: this.generateStudents("D"),
      E: this.generateStudents("E"),
      F: this.generateStudents("F"),
    }
    this.currentSection = null
    this.init()
  }

  generateStudents(section) {
    const names = [
      "Alice Johnson",
      "Bob Smith",
      "Carol Davis",
      "David Wilson",
      "Emma Brown",
      "Frank Miller",
      "Grace Lee",
      "Henry Taylor",
      "Ivy Chen",
      "Jack Anderson",
    ]

    return names
      .map((name, index) => ({
        id: `${section}${index + 1}`,
        name: name,
        section: section,
        submitted: Math.random() > 0.3,
        grades: this.generateGrades(),
        average: 0,
      }))
      .map((student) => {
        student.average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
        return student
      })
  }

  generateGrades() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 41) + 60)
  }

  init() {
    this.setupSectionDropdown()
  }

  setupSectionDropdown() {
    const dropdown = document.getElementById("sectionDropdown")
    const menu = document.getElementById("sectionMenu")
    const items = menu.querySelectorAll(".dropdown-item")

    dropdown.addEventListener("click", () => {
      menu.classList.toggle("show")
    })

    items.forEach((item) => {
      item.addEventListener("click", () => {
        const section = item.dataset.section
        this.selectSection(section)
        dropdown.querySelector("span").textContent = `Section ${section}`
        menu.classList.remove("show")
      })
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        menu.classList.remove("show")
      }
    })
  }

  selectSection(section) {
    this.currentSection = section
    this.renderStudents()
  }

  renderStudents() {
    const container = document.getElementById("studentsContainer")
    const students = this.sections[this.currentSection]

    container.innerHTML = students
      .map(
        (student) => `
            <div class="student-item" data-student-id="${student.id}">
                <span class="student-name">${student.name}</span>
                <span class="submission-status ${student.submitted ? "submitted" : "pending"}">
                    ${student.submitted ? "Submitted" : "Pending"}
                </span>
            </div>
        `,
      )
      .join("")

    // Add click handlers for student items
    container.querySelectorAll(".student-item").forEach((item) => {
      item.addEventListener("click", () => {
        const studentId = item.dataset.studentId
        this.showStudentHistory(studentId)
      })
    })
  }

  showStudentHistory(studentId) {
    const student = Object.values(this.sections)
      .flat()
      .find((s) => s.id === studentId)
    const modal = document.getElementById("studentModal")
    const title = document.getElementById("studentModalTitle")
    const history = document.getElementById("studentHistory")

    title.textContent = `${student.name} - Grade History`

    const assignments = [
      "Binary Trees Assignment",
      "Sorting Algorithms Lab",
      "Graph Theory Project",
      "Dynamic Programming Quiz",
      "Hash Tables Implementation",
    ]

    history.innerHTML = student.grades
      .map(
        (grade, index) => `
            <div class="history-item">
                <div class="history-date">${new Date(Date.now() - index * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</div>
                <div class="history-assignment">${assignments[index]}</div>
                <div class="history-grade">${grade}%</div>
            </div>
        `,
      )
      .join("")

    modal.classList.add("show")
  }
}

// Assignment Management
class AssignmentManager {
  constructor() {
    this.assignments = this.generateAssignments()
    this.currentAssignment = null
    this.currentQuestion = 0
    this.init()
  }

  generateAssignments() {
    const assignments = [
      {
        id: 1,
        title: "Binary Search Tree Implementation",
        student: "Alice Johnson",
        section: "A",
        priority: "high",
        dueDate: "2024-12-15",
        questions: [
          "Implement a BST insert function",
          "Write a BST search algorithm",
          "Create an in-order traversal method",
        ],
      },
      {
        id: 2,
        title: "Sorting Algorithms Analysis",
        student: "Bob Smith",
        section: "B",
        priority: "medium",
        dueDate: "2024-12-18",
        questions: ["Compare bubble sort and quick sort", "Analyze time complexity", "Implement merge sort"],
      },
      {
        id: 3,
        title: "Graph Traversal Methods",
        student: "Carol Davis",
        section: "A",
        priority: "low",
        dueDate: "2024-12-20",
        questions: ["Implement DFS algorithm", "Write BFS traversal", "Find shortest path"],
      },
    ]
    return assignments
  }

  init() {
    this.renderAssignments()
    this.setupModal()
  }

  renderAssignments() {
    const container = document.getElementById("assignmentsList")

    container.innerHTML = this.assignments
      .map(
        (assignment) => `
            <div class="assignment-item" data-assignment-id="${assignment.id}">
                <div class="assignment-title">${assignment.title}</div>
                <div class="assignment-meta">
                    <span>${assignment.student} (Section ${assignment.section})</span>
                    <span class="assignment-priority ${assignment.priority}">${assignment.priority.toUpperCase()}</span>
                </div>
            </div>
        `,
      )
      .join("")

    // Add click handlers
    container.querySelectorAll(".assignment-item").forEach((item) => {
      item.addEventListener("click", () => {
        const assignmentId = Number.parseInt(item.dataset.assignmentId)
        this.openAssignment(assignmentId)
      })
    })
  }

  openAssignment(assignmentId) {
    this.currentAssignment = this.assignments.find((a) => a.id === assignmentId)
    this.currentQuestion = 0

    const modal = document.getElementById("assignmentModal")
    const title = document.getElementById("modalTitle")

    title.textContent = `${this.currentAssignment.title} - ${this.currentAssignment.student}`
    this.renderQuestion()
    modal.classList.add("show")
  }

  renderQuestion() {
    const container = document.getElementById("questionContainer")
    const question = this.currentAssignment.questions[this.currentQuestion]

    container.innerHTML = `
            <h4>Question ${this.currentQuestion + 1} of ${this.currentAssignment.questions.length}</h4>
            <p>${question}</p>
            <div class="student-answer">
                <h5>Student's Answer:</h5>
                <div class="answer-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <pre><code>function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}</code></pre>
                </div>
            </div>
        `
  }

  setupModal() {
    const modal = document.getElementById("assignmentModal")
    const closeBtn = document.getElementById("modalClose")
    const correctBtn = document.getElementById("correctBtn")
    const incorrectBtn = document.getElementById("incorrectBtn")
    const editControls = document.getElementById("editControls")

    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show")
    })

    // Close modal when clicking outside
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show")
      }
    })

    // Correct button
    correctBtn.addEventListener("click", () => {
      this.nextQuestion()
    })

    // Incorrect button
    incorrectBtn.addEventListener("click", () => {
      editControls.style.display = "block"
    })

    // Tool buttons
    document.querySelectorAll(".tool-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tool-btn").forEach((b) => b.classList.remove("active"))
        btn.classList.add("active")
      })
    })

    // Submit feedback
    document.querySelector(".submit-feedback").addEventListener("click", () => {
      editControls.style.display = "none"
      this.nextQuestion()
    })

    // Student modal close
    document.getElementById("studentModalClose").addEventListener("click", () => {
      document.getElementById("studentModal").classList.remove("show")
    })
  }

  nextQuestion() {
    this.currentQuestion++
    if (this.currentQuestion < this.currentAssignment.questions.length) {
      this.renderQuestion()
      document.getElementById("editControls").style.display = "none"
    } else {
      alert("Assignment review completed!")
      document.getElementById("assignmentModal").classList.remove("show")
    }
  }
}

// Calendar Management
class CalendarManager {
  constructor() {
    this.currentDate = new Date()
    this.deadlines = {
      "2024-12-15": "BST Assignment Due",
      "2024-12-18": "Sorting Analysis Due",
      "2024-12-20": "Graph Traversal Due",
      "2024-12-22": "Final Project Due",
    }
    this.init()
  }

  init() {
    this.renderCalendar()
    this.setupNavigation()
  }

  setupNavigation() {
    document.getElementById("prevMonth").addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1)
      this.renderCalendar()
    })

    document.getElementById("nextMonth").addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1)
      this.renderCalendar()
    })
  }

  renderCalendar() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const monthYear = document.getElementById("currentMonth")
    monthYear.textContent = `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`

    const grid = document.getElementById("calendarGrid")
    const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)
    const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    let html = ""
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    // Add day headers
    dayNames.forEach((day) => {
      html += `<div class="calendar-day-header" style="font-weight: 600; text-align: center; padding: 0.5rem; color: var(--muted-foreground);">${day}</div>`
    })

    // Add calendar days
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      const dateStr = date.toISOString().split("T")[0]
      const hasDeadline = this.deadlines[dateStr]
      const isCurrentMonth = date.getMonth() === this.currentDate.getMonth()

      html += `
                <div class="calendar-day ${hasDeadline ? "has-deadline" : ""}" 
                     style="${!isCurrentMonth ? "opacity: 0.3;" : ""}"
                     title="${hasDeadline || ""}">
                    ${date.getDate()}
                </div>
            `
    }

    grid.innerHTML = html
  }
}

// Leaderboard Chart
class LeaderboardChart {
  constructor() {
    this.canvas = document.getElementById("leaderboardChart")
    this.ctx = this.canvas.getContext("2d")
    this.data = [
      { section: "A", average: 87.5 },
      { section: "B", average: 84.2 },
      { section: "C", average: 89.1 },
      { section: "D", average: 82.7 },
      { section: "E", average: 85.9 },
      { section: "F", average: 88.3 },
    ].sort((a, b) => b.average - a.average)

    this.init()
  }

  init() {
    this.resizeCanvas()
    this.drawChart()
    window.addEventListener("resize", () => {
      this.resizeCanvas()
      this.drawChart()
    })
  }

  resizeCanvas() {
    const container = this.canvas.parentElement
    this.canvas.width = container.clientWidth
    this.canvas.height = container.clientHeight
  }

  drawChart() {
    const { width, height } = this.canvas
    const padding = 60
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Clear canvas
    this.ctx.clearRect(0, 0, width, height)

    // Set styles
    this.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--foreground")
    this.ctx.font = "14px DM Sans"

    // Draw bars
    const barWidth = chartWidth / this.data.length
    const maxValue = Math.max(...this.data.map((d) => d.average))

    this.data.forEach((item, index) => {
      const barHeight = (item.average / maxValue) * chartHeight
      const x = padding + index * barWidth + barWidth * 0.1
      const y = height - padding - barHeight
      const width = barWidth * 0.8

      // Draw bar
      const gradient = this.ctx.createLinearGradient(0, y, 0, y + barHeight)
      gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue("--primary"))
      gradient.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue("--accent"))

      this.ctx.fillStyle = gradient
      this.ctx.fillRect(x, y, width, barHeight)

      // Draw section label
      this.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--foreground")
      this.ctx.textAlign = "center"
      this.ctx.fillText(`Section ${item.section}`, x + width / 2, height - padding + 20)

      // Draw average value
      this.ctx.fillText(`${item.average.toFixed(1)}%`, x + width / 2, y - 10)
    })

    // Draw title
    this.ctx.font = "bold 16px Space Grotesk"
    this.ctx.textAlign = "center"
    this.ctx.fillText("Section Performance Rankings", width / 2, 30)
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager()
  new StudentManager()
  new AssignmentManager()
  new CalendarManager()
  new LeaderboardChart()
})