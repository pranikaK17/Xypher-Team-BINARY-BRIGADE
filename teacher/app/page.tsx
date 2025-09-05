"use client"

import { useState, useEffect } from "react"

export default function TeacherDashboard() {
  const [currentSection, setCurrentSection] = useState("A")
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedTool, setSelectedTool] = useState("pen")
  const [showCalendarMenu, setShowCalendarMenu] = useState(false)
  const [circleMode, setCircleMode] = useState(false)
  const [circledDates, setCircledDates] = useState(new Set())
  const [isGrading, setIsGrading] = useState(false)
  const [currentSubmission, setCurrentSubmission] = useState(null)

  const sections = ["A", "B", "C", "D", "E", "F"]

  const students = {
    A: [
      {
        id: 1,
        name: "Aarav Sharma",
        submitted: true,
        grade: 85,
        history: [
          { assignment: "Linked Lists", grade: 85 },
          { assignment: "Stacks & Queues", grade: 92 },
          { assignment: "Hash Tables", grade: 78 },
          { assignment: "Trees", grade: 88 },
        ],
      },
      {
        id: 2,
        name: "Vivaan Patel",
        submitted: true,
        grade: 92,
        history: [
          { assignment: "Linked Lists", grade: 90 },
          { assignment: "Stacks & Queues", grade: 88 },
          { assignment: "Hash Tables", grade: 95 },
          { assignment: "Trees", grade: 92 },
        ],
      },
      {
        id: 3,
        name: "Aditya Gupta",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 75 },
          { assignment: "Stacks & Queues", grade: 80 },
          { assignment: "Hash Tables", grade: 82 },
        ],
      },
      {
        id: 4,
        name: "Vihaan Singh",
        submitted: true,
        grade: 78,
        history: [
          { assignment: "Linked Lists", grade: 70 },
          { assignment: "Stacks & Queues", grade: 75 },
          { assignment: "Hash Tables", grade: 80 },
          { assignment: "Trees", grade: 78 },
        ],
      },
      {
        id: 5,
        name: "Arjun Kumar",
        submitted: true,
        grade: 95,
        history: [
          { assignment: "Linked Lists", grade: 95 },
          { assignment: "Stacks & Queues", grade: 98 },
          { assignment: "Hash Tables", grade: 92 },
          { assignment: "Trees", grade: 95 },
        ],
      },
      {
        id: 6,
        name: "Sai Reddy",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 65 },
          { assignment: "Stacks & Queues", grade: 70 },
          { assignment: "Hash Tables", grade: 68 },
        ],
      },
      {
        id: 7,
        name: "Reyansh Joshi",
        submitted: true,
        grade: 88,
        history: [
          { assignment: "Linked Lists", grade: 85 },
          { assignment: "Stacks & Queues", grade: 90 },
          { assignment: "Hash Tables", grade: 86 },
          { assignment: "Trees", grade: 88 },
        ],
      },
      {
        id: 8,
        name: "Ayaan Mehta",
        submitted: true,
        grade: 82,
        history: [
          { assignment: "Linked Lists", grade: 80 },
          { assignment: "Stacks & Queues", grade: 85 },
          { assignment: "Hash Tables", grade: 79 },
          { assignment: "Trees", grade: 82 },
        ],
      },
      {
        id: 9,
        name: "Krishna Nair",
        submitted: true,
        grade: 90,
        history: [
          { assignment: "Linked Lists", grade: 88 },
          { assignment: "Stacks & Queues", grade: 92 },
          { assignment: "Hash Tables", grade: 87 },
          { assignment: "Trees", grade: 90 },
        ],
      },
      {
        id: 10,
        name: "Ishaan Agarwal",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 72 },
          { assignment: "Stacks & Queues", grade: 75 },
          { assignment: "Hash Tables", grade: 70 },
        ],
      },
    ],
    B: [
      {
        id: 11,
        name: "Ananya Verma",
        submitted: true,
        grade: 87,
        history: [
          { assignment: "Linked Lists", grade: 85 },
          { assignment: "Stacks & Queues", grade: 89 },
          { assignment: "Hash Tables", grade: 84 },
          { assignment: "Trees", grade: 87 },
        ],
      },
      {
        id: 12,
        name: "Diya Kapoor",
        submitted: true,
        grade: 91,
        history: [
          { assignment: "Linked Lists", grade: 88 },
          { assignment: "Stacks & Queues", grade: 93 },
          { assignment: "Hash Tables", grade: 89 },
          { assignment: "Trees", grade: 91 },
        ],
      },
      {
        id: 13,
        name: "Saanvi Malhotra",
        submitted: true,
        grade: 83,
        history: [
          { assignment: "Linked Lists", grade: 80 },
          { assignment: "Stacks & Queues", grade: 85 },
          { assignment: "Hash Tables", grade: 81 },
          { assignment: "Trees", grade: 83 },
        ],
      },
      {
        id: 14,
        name: "Aadhya Bansal",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 77 },
          { assignment: "Stacks & Queues", grade: 80 },
          { assignment: "Hash Tables", grade: 75 },
        ],
      },
      {
        id: 15,
        name: "Kavya Sinha",
        submitted: true,
        grade: 94,
        history: [
          { assignment: "Linked Lists", grade: 92 },
          { assignment: "Stacks & Queues", grade: 96 },
          { assignment: "Hash Tables", grade: 91 },
          { assignment: "Trees", grade: 94 },
        ],
      },
      {
        id: 16,
        name: "Arya Tiwari",
        submitted: true,
        grade: 79,
        history: [
          { assignment: "Linked Lists", grade: 75 },
          { assignment: "Stacks & Queues", grade: 82 },
          { assignment: "Hash Tables", grade: 77 },
          { assignment: "Trees", grade: 79 },
        ],
      },
      {
        id: 17,
        name: "Myra Saxena",
        submitted: true,
        grade: 86,
        history: [
          { assignment: "Linked Lists", grade: 84 },
          { assignment: "Stacks & Queues", grade: 88 },
          { assignment: "Hash Tables", grade: 83 },
          { assignment: "Trees", grade: 86 },
        ],
      },
      {
        id: 18,
        name: "Kiara Bhatt",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 69 },
          { assignment: "Stacks & Queues", grade: 72 },
          { assignment: "Hash Tables", grade: 68 },
        ],
      },
      {
        id: 19,
        name: "Navya Pandey",
        submitted: true,
        grade: 89,
        history: [
          { assignment: "Linked Lists", grade: 87 },
          { assignment: "Stacks & Queues", grade: 91 },
          { assignment: "Hash Tables", grade: 86 },
          { assignment: "Trees", grade: 89 },
        ],
      },
      {
        id: 20,
        name: "Riya Mishra",
        submitted: true,
        grade: 85,
        history: [
          { assignment: "Linked Lists", grade: 83 },
          { assignment: "Stacks & Queues", grade: 87 },
          { assignment: "Hash Tables", grade: 82 },
          { assignment: "Trees", grade: 85 },
        ],
      },
    ],
    C: [
      {
        id: 21,
        name: "Advait Rao",
        submitted: true,
        grade: 81,
        history: [
          { assignment: "Linked Lists", grade: 78 },
          { assignment: "Stacks & Queues", grade: 83 },
          { assignment: "Hash Tables", grade: 79 },
          { assignment: "Trees", grade: 81 },
        ],
      },
      {
        id: 22,
        name: "Prisha Iyer",
        submitted: true,
        grade: 93,
        history: [
          { assignment: "Linked Lists", grade: 90 },
          { assignment: "Stacks & Queues", grade: 95 },
          { assignment: "Hash Tables", grade: 91 },
          { assignment: "Trees", grade: 93 },
        ],
      },
      {
        id: 23,
        name: "Atharv Desai",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 73 },
          { assignment: "Stacks & Queues", grade: 76 },
          { assignment: "Hash Tables", grade: 71 },
        ],
      },
      {
        id: 24,
        name: "Ira Chandra",
        submitted: true,
        grade: 88,
        history: [
          { assignment: "Linked Lists", grade: 85 },
          { assignment: "Stacks & Queues", grade: 90 },
          { assignment: "Hash Tables", grade: 86 },
          { assignment: "Trees", grade: 88 },
        ],
      },
      {
        id: 25,
        name: "Rudra Jain",
        submitted: true,
        grade: 76,
        history: [
          { assignment: "Linked Lists", grade: 72 },
          { assignment: "Stacks & Queues", grade: 78 },
          { assignment: "Hash Tables", grade: 74 },
          { assignment: "Trees", grade: 76 },
        ],
      },
      {
        id: 26,
        name: "Tara Bose",
        submitted: true,
        grade: 92,
        history: [
          { assignment: "Linked Lists", grade: 89 },
          { assignment: "Stacks & Queues", grade: 94 },
          { assignment: "Hash Tables", grade: 90 },
          { assignment: "Trees", grade: 92 },
        ],
      },
      {
        id: 27,
        name: "Kabir Ghosh",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 68 },
          { assignment: "Stacks & Queues", grade: 71 },
          { assignment: "Hash Tables", grade: 66 },
        ],
      },
      {
        id: 28,
        name: "Anika Dutta",
        submitted: true,
        grade: 84,
        history: [
          { assignment: "Linked Lists", grade: 81 },
          { assignment: "Stacks & Queues", grade: 86 },
          { assignment: "Hash Tables", grade: 82 },
          { assignment: "Trees", grade: 84 },
        ],
      },
      {
        id: 29,
        name: "Shivansh Roy",
        submitted: true,
        grade: 87,
        history: [
          { assignment: "Linked Lists", grade: 84 },
          { assignment: "Stacks & Queues", grade: 89 },
          { assignment: "Hash Tables", grade: 85 },
          { assignment: "Trees", grade: 87 },
        ],
      },
      {
        id: 30,
        name: "Mira Chakraborty",
        submitted: true,
        grade: 90,
        history: [
          { assignment: "Linked Lists", grade: 87 },
          { assignment: "Stacks & Queues", grade: 92 },
          { assignment: "Hash Tables", grade: 88 },
          { assignment: "Trees", grade: 90 },
        ],
      },
    ],
    D: [
      {
        id: 31,
        name: "Aryan Khanna",
        submitted: true,
        grade: 89,
        history: [
          { assignment: "Linked Lists", grade: 86 },
          { assignment: "Stacks & Queues", grade: 91 },
          { assignment: "Hash Tables", grade: 87 },
          { assignment: "Trees", grade: 89 },
        ],
      },
      {
        id: 32,
        name: "Zara Shah",
        submitted: true,
        grade: 85,
        history: [
          { assignment: "Linked Lists", grade: 82 },
          { assignment: "Stacks & Queues", grade: 87 },
          { assignment: "Hash Tables", grade: 83 },
          { assignment: "Trees", grade: 85 },
        ],
      },
      {
        id: 33,
        name: "Dhruv Bajaj",
        submitted: true,
        grade: 77,
        history: [
          { assignment: "Linked Lists", grade: 74 },
          { assignment: "Stacks & Queues", grade: 79 },
          { assignment: "Hash Tables", grade: 75 },
          { assignment: "Trees", grade: 77 },
        ],
      },
      {
        id: 34,
        name: "Nisha Goyal",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 70 },
          { assignment: "Stacks & Queues", grade: 73 },
          { assignment: "Hash Tables", grade: 69 },
        ],
      },
      {
        id: 35,
        name: "Karan Sethi",
        submitted: true,
        grade: 91,
        history: [
          { assignment: "Linked Lists", grade: 88 },
          { assignment: "Stacks & Queues", grade: 93 },
          { assignment: "Hash Tables", grade: 89 },
          { assignment: "Trees", grade: 91 },
        ],
      },
      {
        id: 36,
        name: "Priya Chopra",
        submitted: true,
        grade: 86,
        history: [
          { assignment: "Linked Lists", grade: 83 },
          { assignment: "Stacks & Queues", grade: 88 },
          { assignment: "Hash Tables", grade: 84 },
          { assignment: "Trees", grade: 86 },
        ],
      },
      {
        id: 37,
        name: "Yash Arora",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 65 },
          { assignment: "Stacks & Queues", grade: 68 },
          { assignment: "Hash Tables", grade: 63 },
        ],
      },
      {
        id: 38,
        name: "Rhea Mittal",
        submitted: true,
        grade: 94,
        history: [
          { assignment: "Linked Lists", grade: 91 },
          { assignment: "Stacks & Queues", grade: 96 },
          { assignment: "Hash Tables", grade: 92 },
          { assignment: "Trees", grade: 94 },
        ],
      },
      {
        id: 39,
        name: "Arnav Goel",
        submitted: true,
        grade: 82,
        history: [
          { assignment: "Linked Lists", grade: 79 },
          { assignment: "Stacks & Queues", grade: 84 },
          { assignment: "Hash Tables", grade: 80 },
          { assignment: "Trees", grade: 82 },
        ],
      },
      {
        id: 40,
        name: "Tanvi Aggarwal",
        submitted: true,
        grade: 88,
        history: [
          { assignment: "Linked Lists", grade: 85 },
          { assignment: "Stacks & Queues", grade: 90 },
          { assignment: "Hash Tables", grade: 86 },
          { assignment: "Trees", grade: 88 },
        ],
      },
    ],
    E: [
      {
        id: 41,
        name: "Veer Thakur",
        submitted: true,
        grade: 92,
        history: [
          { assignment: "Linked Lists", grade: 89 },
          { assignment: "Stacks & Queues", grade: 94 },
          { assignment: "Hash Tables", grade: 90 },
          { assignment: "Trees", grade: 92 },
        ],
      },
      {
        id: 42,
        name: "Vaani Khurana",
        submitted: true,
        grade: 87,
        history: [
          { assignment: "Linked Lists", grade: 84 },
          { assignment: "Stacks & Queues", grade: 89 },
          { assignment: "Hash Tables", grade: 85 },
          { assignment: "Trees", grade: 87 },
        ],
      },
      {
        id: 43,
        name: "Shaurya Bhatia",
        submitted: true,
        grade: 83,
        history: [
          { assignment: "Linked Lists", grade: 80 },
          { assignment: "Stacks & Queues", grade: 85 },
          { assignment: "Hash Tables", grade: 81 },
          { assignment: "Trees", grade: 83 },
        ],
      },
      {
        id: 44,
        name: "Aarohi Jindal",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 76 },
          { assignment: "Stacks & Queues", grade: 79 },
          { assignment: "Hash Tables", grade: 74 },
        ],
      },
      {
        id: 45,
        name: "Ranveer Kohli",
        submitted: true,
        grade: 95,
        history: [
          { assignment: "Linked Lists", grade: 92 },
          { assignment: "Stacks & Queues", grade: 97 },
          { assignment: "Hash Tables", grade: 93 },
          { assignment: "Trees", grade: 95 },
        ],
      },
      {
        id: 46,
        name: "Shanaya Vohra",
        submitted: true,
        grade: 89,
        history: [
          { assignment: "Linked Lists", grade: 86 },
          { assignment: "Stacks & Queues", grade: 91 },
          { assignment: "Hash Tables", grade: 87 },
          { assignment: "Trees", grade: 89 },
        ],
      },
      {
        id: 47,
        name: "Aarav Singhal",
        submitted: true,
        grade: 81,
        history: [
          { assignment: "Linked Lists", grade: 78 },
          { assignment: "Stacks & Queues", grade: 83 },
          { assignment: "Hash Tables", grade: 79 },
          { assignment: "Trees", grade: 81 },
        ],
      },
      {
        id: 48,
        name: "Bhavya Rastogi",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 72 },
          { assignment: "Stacks & Queues", grade: 75 },
          { assignment: "Hash Tables", grade: 70 },
        ],
      },
      {
        id: 49,
        name: "Kartik Sood",
        submitted: true,
        grade: 90,
        history: [
          { assignment: "Linked Lists", grade: 87 },
          { assignment: "Stacks & Queues", grade: 92 },
          { assignment: "Hash Tables", grade: 88 },
          { assignment: "Trees", grade: 90 },
        ],
      },
      {
        id: 50,
        name: "Disha Kaul",
        submitted: true,
        grade: 86,
        history: [
          { assignment: "Linked Lists", grade: 83 },
          { assignment: "Stacks & Queues", grade: 88 },
          { assignment: "Hash Tables", grade: 84 },
          { assignment: "Trees", grade: 86 },
        ],
      },
    ],
    F: [
      {
        id: 51,
        name: "Eshan Bhardwaj",
        submitted: true,
        grade: 84,
        history: [
          { assignment: "Linked Lists", grade: 81 },
          { assignment: "Stacks & Queues", grade: 86 },
          { assignment: "Hash Tables", grade: 82 },
          { assignment: "Trees", grade: 84 },
        ],
      },
      {
        id: 52,
        name: "Fatima Khan",
        submitted: true,
        grade: 88,
        history: [
          { assignment: "Linked Lists", grade: 85 },
          { assignment: "Stacks & Queues", grade: 90 },
          { assignment: "Hash Tables", grade: 86 },
          { assignment: "Trees", grade: 88 },
        ],
      },
      {
        id: 53,
        name: "Gaurav Sachdeva",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 67 },
          { assignment: "Stacks & Queues", grade: 70 },
          { assignment: "Hash Tables", grade: 65 },
        ],
      },
      {
        id: 54,
        name: "Hiya Mahajan",
        submitted: true,
        grade: 91,
        history: [
          { assignment: "Linked Lists", grade: 88 },
          { assignment: "Stacks & Queues", grade: 93 },
          { assignment: "Hash Tables", grade: 89 },
          { assignment: "Trees", grade: 91 },
        ],
      },
      {
        id: 55,
        name: "Ishan Gulati",
        submitted: true,
        grade: 79,
        history: [
          { assignment: "Linked Lists", grade: 76 },
          { assignment: "Stacks & Queues", grade: 81 },
          { assignment: "Hash Tables", grade: 77 },
          { assignment: "Trees", grade: 79 },
        ],
      },
      {
        id: 56,
        name: "Jiya Oberoi",
        submitted: true,
        grade: 93,
        history: [
          { assignment: "Linked Lists", grade: 90 },
          { assignment: "Stacks & Queues", grade: 95 },
          { assignment: "Hash Tables", grade: 91 },
          { assignment: "Trees", grade: 93 },
        ],
      },
      {
        id: 57,
        name: "Kshitij Wadhwa",
        submitted: true,
        grade: 85,
        history: [
          { assignment: "Linked Lists", grade: 82 },
          { assignment: "Stacks & Queues", grade: 87 },
          { assignment: "Hash Tables", grade: 83 },
          { assignment: "Trees", grade: 85 },
        ],
      },
      {
        id: 58,
        name: "Lavanya Talwar",
        submitted: false,
        grade: null,
        history: [
          { assignment: "Linked Lists", grade: 71 },
          { assignment: "Stacks & Queues", grade: 74 },
          { assignment: "Hash Tables", grade: 69 },
        ],
      },
      {
        id: 59,
        name: "Manav Chadha",
        submitted: true,
        grade: 87,
        history: [
          { assignment: "Linked Lists", grade: 84 },
          { assignment: "Stacks & Queues", grade: 89 },
          { assignment: "Hash Tables", grade: 85 },
          { assignment: "Trees", grade: 87 },
        ],
      },
      {
        id: 60,
        name: "Nitya Kalra",
        submitted: true,
        grade: 82,
        history: [
          { assignment: "Linked Lists", grade: 79 },
          { assignment: "Stacks & Queues", grade: 84 },
          { assignment: "Hash Tables", grade: 80 },
          { assignment: "Trees", grade: 82 },
        ],
      },
    ],
  }

  const assignments = [
    { id: 1, title: "Binary Search Trees", dueDate: "2024-01-15", submitted: 8, total: 10, status: "pending" },
    { id: 2, title: "Graph Algorithms", dueDate: "2024-01-22", submitted: 10, total: 10, status: "graded" },
    { id: 3, title: "Dynamic Programming", dueDate: "2024-01-29", submitted: 6, total: 10, status: "pending" },
    { id: 4, title: "Sorting Algorithms", dueDate: "2024-02-05", submitted: 0, total: 10, status: "upcoming" },
  ]

  const sampleSubmissions = [
    {
      id: 1,
      studentName: "Aarav Sharma",
      assignmentId: 1,
      submittedAt: "2024-01-14 11:30 PM",
      document: {
        type: "pdf",
        name: "BST_Implementation_Aarav.pdf",
        content:
          "Binary Search Tree Implementation\n\nclass BSTNode:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None\n\nclass BST:\n    def __init__(self):\n        self.root = None\n    \n    def insert(self, value):\n        if not self.root:\n            self.root = BSTNode(value)\n        else:\n            self._insert_recursive(self.root, value)\n    \n    def _insert_recursive(self, node, value):\n        if value < node.value:\n            if node.left is None:\n                node.left = BSTNode(value)\n            else:\n                self._insert_recursive(node.left, value)\n        else:\n            if node.right is None:\n                node.right = BSTNode(value)\n            else:\n                self._insert_recursive(node.right, value)",
      },
    },
    {
      id: 2,
      studentName: "Vivaan Patel",
      assignmentId: 1,
      submittedAt: "2024-01-15 09:45 AM",
      document: {
        type: "py",
        name: "bst_solution_vivaan.py",
        content:
          "# Binary Search Tree Assignment - Vivaan Patel\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef insert_into_bst(root, val):\n    if not root:\n        return TreeNode(val)\n    \n    if val < root.val:\n        root.left = insert_into_bst(root.left, val)\n    else:\n        root.right = insert_into_bst(root.right, val)\n    \n    return root\n\ndef search_bst(root, val):\n    if not root or root.val == val:\n        return root\n    \n    if val < root.val:\n        return search_bst(root.left, val)\n    else:\n        return search_bst(root.right, val)",
      },
    },
  ]

  const leaderboardData = [
    { section: "A", average: 86.2, students: 10 },
    { section: "B", average: 85.8, students: 10 },
    { section: "C", average: 82.4, students: 10 },
    { section: "D", average: 84.1, students: 10 },
    { section: "E", average: 87.3, students: 10 },
    { section: "F", average: 83.7, students: 10 },
  ]

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const getCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      days.push(date)
    }
    return days
  }

  const hasAssignmentDue = (date) => {
    return false
  }

  const handleDateClick = (date) => {
    if (circleMode) {
      const dateString = date.toDateString()
      const newCircledDates = new Set(circledDates)
      if (newCircledDates.has(dateString)) {
        newCircledDates.delete(dateString)
      } else {
        newCircledDates.add(dateString)
      }
      setCircledDates(newCircledDates)
    }
  }

  const startGrading = (assignment) => {
    setIsGrading(true)
    setCurrentSubmission(sampleSubmissions[0]) // Start with first submission
  }

  const backToAssignments = () => {
    setIsGrading(false)
    setCurrentSubmission(null)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 to-white text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gradient-to-r from-white to-blue-50 border-blue-200"
        } border-b px-6 py-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-700">Teacher Dashboard</h1>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800"
              }`}
            >
              Data Structures & Algorithms
            </span>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300"
            }`}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - Professor & Students */}
        <div
          className={`w-80 ${
            isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gradient-to-b from-white to-blue-50 border-blue-200"
          } border-r p-6 overflow-y-auto`}
        >
          {/* Professor Profile */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                DR
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dr. Priya Sharma</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-blue-600"}`}>
                  Computer Science Professor
                </p>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-blue-600"}`}>DSA Course Instructor</p>
              </div>
            </div>
          </div>

          {/* Section Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select Section</label>
            <select
              value={currentSection}
              onChange={(e) => setCurrentSection(e.target.value)}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gradient-to-r from-white to-blue-50 border-blue-200 focus:border-blue-400"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {sections.map((section) => (
                <option key={section} value={section}>
                  Section {section}
                </option>
              ))}
            </select>
          </div>

          {/* Students List */}
          <div>
            <h4 className="font-semibold mb-4">Students ({students[currentSection]?.length || 0})</h4>
            <div className="space-y-2">
              {(students[currentSection] || []).map((student) => (
                <div
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedStudent?.id === student.id
                      ? "bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300"
                      : isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50"
                  } border`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{student.name}</span>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`w-3 h-3 rounded-full ${student.submitted ? "bg-green-500" : "bg-red-500"}`}
                      ></span>
                      {student.grade && <span className="text-sm font-semibold">{student.grade}%</span>}
                    </div>
                  </div>
                  {selectedStudent?.id === student.id && (
                    <div className="mt-2 pt-2 border-t border-blue-200">
                      <p className="text-sm font-medium mb-2">Grade History:</p>
                      <div className="space-y-1">
                        {student.history.map((record, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                          >
                            <span className="font-medium">{record.assignment}</span>
                            <span className="font-bold">{record.grade}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Content - Calendar & Leaderboard */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Calendar */}
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-gradient-to-br from-white to-blue-50"
            } rounded-lg p-6 mb-6 shadow-sm border border-blue-100`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Assignment Calendar</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                    className={`p-2 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-100"}`}
                  >
                    ←
                  </button>
                  <span className="font-medium">
                    {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </span>
                  <button
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                    className={`p-2 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-100"}`}
                  >
                    →
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-100"
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="5" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="19" r="2" />
                    </svg>
                  </button>
                  {showCalendarMenu && (
                    <div
                      className={`absolute right-0 top-full mt-2 w-48 ${
                        isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-blue-200"
                      } border rounded-lg shadow-lg z-10`}
                    >
                      <button
                        onClick={() => {
                          setCircleMode(!circleMode)
                          setShowCalendarMenu(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:${
                          isDarkMode ? "bg-gray-600" : "bg-blue-50"
                        } rounded-lg transition-colors`}
                      >
                        {circleMode ? "Exit Highlight Mode" : "Mark Assignment Deadline Date"}
                      </button>
                      {circledDates.size > 0 && (
                        <button
                          onClick={() => {
                            setCircledDates(new Set())
                            setShowCalendarMenu(false)
                          }}
                          className={`w-full text-left px-4 py-2 hover:${
                            isDarkMode ? "bg-gray-600" : "bg-blue-50"
                          } rounded-lg transition-colors text-red-600`}
                        >
                          Clear All Highlights
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {circleMode && (
              <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  📍 Highlight Mode Active - Click on dates to highlight them
                </p>
              </div>
            )}
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className={`p-2 text-center text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {day}
                </div>
              ))}
              {getCalendarDays().map((date, index) => {
                const isDue = hasAssignmentDue(date)
                const isCurrentMonth = date.getMonth() === currentDate.getMonth()
                const isCircled = circledDates.has(date.toDateString())

                return (
                  <div
                    key={index}
                    onClick={() => handleDateClick(date)}
                    className={`p-2 text-center text-sm relative ${
                      !isCurrentMonth
                        ? isDarkMode
                          ? "text-gray-600"
                          : "text-gray-400"
                        : isDarkMode
                          ? "text-white"
                          : "text-gray-900"
                    } ${
                      isCircled ? "border-2 border-blue-500 rounded-full bg-blue-50 dark:bg-blue-900" : ""
                    } ${circleMode ? "cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800" : ""}`}
                  >
                    {date.getDate()}
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
              {circledDates.size > 0 && (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 border-2 border-blue-500 rounded-full bg-blue-50"></div>
                  <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>Highlighted Dates</span>
                </div>
              )}
            </div>
          </div>

          {/* Leaderboard */}
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-gradient-to-br from-white to-blue-50"
            } rounded-lg p-6 shadow-sm border border-blue-100`}
          >
            <h3 className="text-xl font-semibold mb-4">Section Performance</h3>
            <div className="h-64 relative">
              <svg width="100%" height="100%" viewBox="0 0 400 200" className="overflow-visible">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <g key={i}>
                    <line
                      x1="40"
                      y1={160 - i * 24}
                      x2="360"
                      y2={160 - i * 24}
                      stroke={isDarkMode ? "#374151" : "#dbeafe"}
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    <text
                      x="30"
                      y={165 - i * 24}
                      fill={isDarkMode ? "#9ca3af" : "#3b82f6"}
                      fontSize="10"
                      textAnchor="end"
                    >
                      {70 + i * 5}%
                    </text>
                  </g>
                ))}

                {leaderboardData.map((section, index) => (
                  <text
                    key={section.section}
                    x={60 + index * 50}
                    y="180"
                    fill={isDarkMode ? "#9ca3af" : "#3b82f6"}
                    fontSize="12"
                    textAnchor="middle"
                  >
                    Sec {section.section}
                  </text>
                ))}

                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>

                <path
                  d={`M ${leaderboardData
                    .map((section, index) => {
                      const x = 60 + index * 50
                      const y = 160 - (section.average - 70) * 4.8
                      return `${index === 0 ? "M" : "L"} ${x} ${y}`
                    })
                    .join(" ")}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {leaderboardData.map((section, index) => {
                  const x = 60 + index * 50
                  const y = 160 - (section.average - 70) * 4.8
                  return (
                    <g key={section.section}>
                      <circle
                        cx={x}
                        cy={y}
                        r="6"
                        fill="#3b82f6"
                        stroke={isDarkMode ? "#1f2937" : "#ffffff"}
                        strokeWidth="2"
                      />
                      <text
                        x={x}
                        y={y - 12}
                        fill={isDarkMode ? "#ffffff" : "#1f2937"}
                        fontSize="10"
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        {section.average}%
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-blue-600"}`}>Average Performance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-blue-600"}`}>Section Score</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Assignments */}
        <div
          className={`w-96 ${
            isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gradient-to-b from-white to-blue-50 border-blue-200"
          } border-l p-6 overflow-y-auto`}
        >
          {!isGrading ? (
            <>
              <h3 className="text-xl font-semibold mb-4">Assignments to Check</h3>

              <div className="space-y-3">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    onClick={() => setSelectedAssignment(assignment)}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedAssignment?.id === assignment.id
                        ? "border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 dark:bg-gray-700"
                        : isDarkMode
                          ? "border-gray-600 bg-gray-700 hover:bg-gray-600"
                          : "bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{assignment.title}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          assignment.status === "graded"
                            ? "bg-green-100 text-green-800"
                            : assignment.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </div>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}>
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        {assignment.submitted}/{assignment.total} submitted
                      </span>
                      <div className={`w-16 ${isDarkMode ? "bg-gray-600" : "bg-gray-200"} rounded-full h-2`}>
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    {selectedAssignment?.id === assignment.id && assignment.status === "pending" && (
                      <div className="mt-3 pt-3 border-t border-blue-200 dark:border-gray-600">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            startGrading(assignment)
                          }}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-blue-800 transition-colors"
                        >
                          Start Grading
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={backToAssignments}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-100"
                  }`}
                >
                  ← Back
                </button>
                <h3 className="text-lg font-semibold">Grading: {selectedAssignment?.title}</h3>
              </div>

              {currentSubmission && (
                <div className="space-y-4">
                  {/* Student Info */}
                  <div
                    className={`p-4 ${
                      isDarkMode ? "bg-gray-700" : "bg-gradient-to-r from-blue-50 to-blue-100"
                    } rounded-lg`}
                  >
                    <h4 className="font-medium text-lg mb-2">{currentSubmission.studentName}</h4>
                    <div className="space-y-2">
                      <div>
                        <label className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-blue-600"}`}>
                          Time Submitted:
                        </label>
                        <input
                          type="text"
                          className={`w-full mt-1 p-2 border rounded text-sm ${
                            isDarkMode
                              ? "bg-gray-600 border-gray-500 text-gray-400"
                              : "bg-blue-50 border-blue-300 text-gray-500"
                          }`}
                          disabled
                        />
                      </div>
                      <div>
                        <label className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-blue-600"}`}>
                          Date Submitted:
                        </label>
                        <input
                          type="text"
                          className={`w-full mt-1 p-2 border rounded text-sm ${
                            isDarkMode
                              ? "bg-gray-600 border-gray-500 text-gray-400"
                              : "bg-blue-50 border-blue-300 text-gray-500"
                          }`}
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  {/* Uploaded Document */}
                  <div
                    className={`${
                      isDarkMode ? "bg-gray-700" : "bg-gradient-to-r from-white to-blue-50"
                    } rounded-lg p-4 border border-blue-200`}
                  >
                    <h4 className="font-medium mb-3">Uploaded Document: {currentSubmission.document.name}</h4>
                    <button
                      className={`w-full py-3 px-4 rounded-lg border-2 border-dashed transition-colors ${
                        isDarkMode
                          ? "border-gray-500 hover:border-gray-400 hover:bg-gray-600"
                          : "border-blue-300 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                        <span className="font-medium">View File</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}