"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import {
  MoreVertical,
  User,
  Award,
  TrendingUp,
  FileText,
  CheckSquare,
  Camera,
  Palette,
  Plus,
  X,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Upload,
  File,
  Edit,
  Sun,
  Moon,
  Activity,
  ChevronRight,
} from "lucide-react"

export default function StudentDashboard() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [showStatus, setShowStatus] = useState(true)

  const [studentProfile, setStudentProfile] = useState({
    name: "Emma Johnson",
    age: 16,
    birthday: "March 15, 2008",
    contact: "+1 (555) 123-4567",
    email: "emma.johnson@school.edu",
    grade: "Grade 11",
    studentId: "STU2024001",
    address: "123 Oak Street, Springfield",
    emergencyContact: "Sarah Johnson - +1 (555) 987-6543",
  })

  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [editedProfile, setEditedProfile] = useState(studentProfile)

  const [badges] = useState([
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
  ])

  const [progressData] = useState({
    overall: 78,
    subjects: [
      { name: "Mathematics", progress: 85, assignments: 12, completed: 10 },
      { name: "Science", progress: 92, assignments: 10, completed: 9 },
      { name: "English", progress: 76, assignments: 8, completed: 6 },
      { name: "History", progress: 68, assignments: 9, completed: 6 },
      { name: "Art", progress: 88, assignments: 6, completed: 5 },
    ],
  })

  const [marksData] = useState([
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
  ])

  const [assignmentFeedback] = useState([
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
  ])

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Mathematics",
      color: "bg-blue-100",
      image: "/aesthetic-minimalist-mathematics-workspace-with-ge.jpg",
    },
    { id: 2, name: "Science", color: "bg-green-100", image: "/modern-science-laboratory-with-soft-lighting-and-p.jpg" },
    {
      id: 3,
      name: "English",
      color: "bg-purple-100",
      image: "/cozy-reading-nook-with-vintage-books-and-warm-ligh.jpg",
    },
    {
      id: 4,
      name: "History",
      color: "bg-orange-100",
      image: "/elegant-historical-artifacts-and-manuscripts-in-so.jpg",
    },
    { id: 5, name: "Art", color: "bg-pink-100", image: "/artistic-studio-with-paintbrushes-and-canvas-in-na.jpg" },
  ])

  const [todoItems, setTodoItems] = useState([
    { id: 1, task: "Complete Math Assignment #5", due: "Tomorrow", completed: false },
    { id: 2, task: "Science Lab Report", due: "Friday", completed: false },
    { id: 3, task: "English Essay Draft", due: "Next Week", completed: true },
    { id: 4, task: "History Research Project", due: "Monday", completed: false },
    { id: 5, task: "Art Portfolio Submission", due: "Next Friday", completed: false },
  ])

  const [selectedView, setSelectedView] = useState("")
  const [newTask, setNewTask] = useState("")
  const [newTaskDue, setNewTaskDue] = useState("")
  const [showAddTask, setShowAddTask] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadType, setUploadType] = useState<"mcq" | "theory" | null>(null)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showBadgesModal, setShowBadgesModal] = useState(false)
  const [showProgressModal, setShowProgressModal] = useState(false)
  const [showMarksModal, setShowMarksModal] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)

  const statusData = {
    onlineStatus: "Active",
    lastSeen: "2 minutes ago",
    currentActivity: "Reviewing Mathematics Assignment",
    upcomingDeadlines: 3,
    completedToday: 2,
    studyStreak: 7,
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const handleProfileAction = (action: string) => {
    if (action === "View Profile") {
      setShowProfileModal(true)
    } else if (action === "Edit Profile") {
      setIsEditingProfile(true)
      setEditedProfile(studentProfile)
      setShowProfileModal(true)
    }
    console.log(`[v0] Profile action: ${action}`)
  }

  const handleSaveProfile = () => {
    setStudentProfile(editedProfile)
    setIsEditingProfile(false)
    console.log(`[v0] Profile saved`)
  }

  const handleBadgeView = () => {
    setShowBadgesModal(true)
    setSelectedView("Badge Collection")
    console.log(`[v0] Viewing badge collection`)
  }

  const handleProgressView = () => {
    setShowProgressModal(true)
    setSelectedView("Progress Tracking")
    console.log(`[v0] Viewing progress`)
  }

  const handleMarksAction = () => {
    setShowMarksModal(true)
    setSelectedView("Marks Centre")
    console.log(`[v0] Viewing marks`)
  }

  const handleAssignmentAction = () => {
    setShowFeedbackModal(true)
    setSelectedView("Assignment Feedback")
    console.log(`[v0] Viewing assignment feedback`)
  }

  const handleSubjectCustomization = (subjectId: number, action: string) => {
    if (action === "Change Photo") {
      const newImage = `/placeholder.svg?height=200&width=400&query=aesthetic ${subjects.find((s) => s.id === subjectId)?.name} study space with soft lighting`
      setSubjects((prev) => prev.map((s) => (s.id === subjectId ? { ...s, image: newImage } : s)))
      console.log(`[v0] Changed photo for subject ${subjectId}`)
    } else if (action === "Change Color") {
      // Cycle through colors
      const colors = [
        "bg-blue-100",
        "bg-green-100",
        "bg-purple-100",
        "bg-orange-100",
        "bg-pink-100",
        "bg-yellow-100",
        "bg-red-100",
      ]
      const currentSubject = subjects.find((s) => s.id === subjectId)
      const currentIndex = colors.indexOf(currentSubject?.color || "bg-blue-100")
      const newColor = colors[(currentIndex + 1) % colors.length]
      setSubjects((prev) => prev.map((s) => (s.id === subjectId ? { ...s, color: newColor } : s)))
      console.log(`[v0] Changed color for subject ${subjectId} to ${newColor}`)
    }
  }

  const handleSubjectClick = (subjectName: string) => {
    setSelectedSubject(subjectName)
    setShowUploadModal(true)
    setUploadType(null)
    setSelectedView(`Subject: ${subjectName}`)
    console.log(`[v0] Opened subject: ${subjectName}`)
  }

  const handleUploadTypeSelect = (type: "mcq" | "theory") => {
    setUploadType(type)
    console.log(`[v0] Selected upload type: ${type}`)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log(`[v0] File uploaded: ${file.name} for ${uploadType} in ${selectedSubject}`)
      // Here you would handle the actual file upload
      alert(`File "${file.name}" uploaded successfully for ${uploadType} assignment in ${selectedSubject}!`)
      setShowUploadModal(false)
      setUploadType(null)
    }
  }

  const toggleTodoItem = (id: number) => {
    setTodoItems((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
    console.log(`[v0] Toggled todo item ${id}`)
  }

  const addNewTask = () => {
    if (newTask.trim()) {
      const newId = Math.max(...todoItems.map((t) => t.id)) + 1
      setTodoItems((prev) => [
        ...prev,
        {
          id: newId,
          task: newTask,
          due: newTaskDue || "No due date",
          completed: false,
        },
      ])
      setNewTask("")
      setNewTaskDue("")
      setShowAddTask(false)
      console.log(`[v0] Added new task: ${newTask}`)
    }
  }

  const removeTask = (id: number) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id))
    console.log(`[v0] Removed task ${id}`)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ease-in-out ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"} flex`}
    >
      {/* Left Sidebar - Profile */}
      <div
        className={`w-80 transition-all duration-300 ease-in-out ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-amber-200"} border-r p-6 shadow-xl`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>Dashboard</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className={`h-8 w-8 p-0 rounded-full transition-all duration-300 ${theme === "dark" ? "hover:bg-gray-700 text-yellow-400" : "hover:bg-amber-100 text-amber-700"}`}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="relative group">
            <Avatar
              className="w-24 h-24 cursor-pointer transition-transform duration-300 group-hover:scale-105 ring-4 ring-amber-200 dark:ring-gray-600"
              onClick={() => handleProfileAction("View Profile")}
            >
              <AvatarImage src="/student-profile.png" alt="Student" />
              <AvatarFallback
                className={`${theme === "dark" ? "bg-gray-700 text-white" : "bg-amber-100 text-amber-900"} font-semibold`}
              >
                EJ
              </AvatarFallback>
            </Avatar>
            <div
              className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${theme === "dark" ? "bg-green-500" : "bg-green-400"} border-2 ${theme === "dark" ? "border-gray-800" : "border-white"} animate-pulse`}
            ></div>
          </div>
          <div className="text-center">
            <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
              {studentProfile.name}
            </h2>
            <p className={`${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>{studentProfile.grade}</p>
          </div>
        </div>

        {showStatus && (
          <Card
            className={`mt-6 transition-all duration-300 ${theme === "dark" ? "bg-gray-700/50 border-gray-600" : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"} backdrop-blur-sm`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle
                  className={`text-sm font-semibold flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-amber-900"}`}
                >
                  <Activity className="h-4 w-4" />
                  Status
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowStatus(false)} className="h-6 w-6 p-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-amber-700"}`}>
                  Online Status
                </span>
                <Badge
                  variant="secondary"
                  className={`${theme === "dark" ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700"} text-xs`}
                >
                  {statusData.onlineStatus}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-amber-700"}`}>Study Streak</span>
                <span className={`text-xs font-semibold ${theme === "dark" ? "text-orange-400" : "text-orange-600"}`}>
                  {statusData.studyStreak} days
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-amber-700"}`}>
                  Completed Today
                </span>
                <span className={`text-xs font-semibold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                  {statusData.completedToday} tasks
                </span>
              </div>
              <div className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"} italic`}>
                {statusData.currentActivity}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 space-y-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-start text-left transition-all duration-200 hover:scale-105 ${theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-amber-100 text-amber-900"} rounded-xl`}
              >
                <User className="mr-3 h-4 w-4" />
                Profile
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem onClick={() => handleProfileAction("View Profile")}>View Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProfileAction("Edit Profile")}>Edit Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            className={`w-full justify-start text-left transition-all duration-200 hover:scale-105 ${theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-amber-100 text-amber-900"} rounded-xl`}
            onClick={handleBadgeView}
          >
            <Award className="mr-3 h-4 w-4" />
            Badge Collection
            <ChevronRight className="ml-auto h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className={`w-full justify-start text-left transition-all duration-200 hover:scale-105 ${theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-amber-100 text-amber-900"} rounded-xl`}
            onClick={handleProgressView}
          >
            <TrendingUp className="mr-3 h-4 w-4" />
            Progress Bar
            <ChevronRight className="ml-auto h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className={`w-full justify-start text-left transition-all duration-200 hover:scale-105 ${theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-amber-100 text-amber-900"} rounded-xl`}
            onClick={handleMarksAction}
          >
            <FileText className="mr-3 h-4 w-4" />
            Marks Centre
            <ChevronRight className="ml-auto h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className={`w-full justify-start text-left transition-all duration-200 hover:scale-105 ${theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-amber-100 text-amber-900"} rounded-xl`}
            onClick={handleAssignmentAction}
          >
            <CheckSquare className="mr-3 h-4 w-4" />
            Checked Assignments
            <ChevronRight className="ml-auto h-4 w-4" />
          </Button>
        </div>

        {selectedView && (
          <div className="mt-6 p-3 bg-beige-50 border border-beige-200 rounded-lg">
            <p className="text-sm font-medium text-beige-800">Current View:</p>
            <p className="text-xs text-beige-600">{selectedView}</p>
            <Button variant="ghost" size="sm" onClick={() => setSelectedView("")} className="mt-2 h-6 px-2 text-xs">
              Close
            </Button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`text-4xl font-bold bg-gradient-to-r ${theme === "dark" ? "from-white to-gray-300" : "from-amber-800 to-orange-700"} bg-clip-text text-transparent`}
          >
            My Subjects
          </h1>
        </div>

        {/* Subject Boxes Grid */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Top Row - 3 subjects */}
          {subjects.slice(0, 3).map((subject, index) => (
            <Card
              key={subject.id}
              className={`relative overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer group ${theme === "dark" ? "bg-gray-800 border-gray-600 shadow-2xl hover:shadow-gray-700/50" : "bg-white/90 backdrop-blur-sm border-amber-200 shadow-xl hover:shadow-2xl hover:shadow-amber-200/50"}`}
              onClick={() => handleSubjectClick(subject.name)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="relative h-28 overflow-hidden -m-px">
                <img
                  src={subject.image || "/placeholder.svg"}
                  alt={subject.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${theme === "dark" ? "from-gray-900/60 to-transparent" : "from-amber-900/30 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`h-8 w-8 p-0 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-gray-800/80 hover:bg-gray-700 text-white" : "bg-white/80 hover:bg-white text-amber-900"} backdrop-blur-sm`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSubjectCustomization(subject.id, "Change Photo")
                        }}
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Change Photo
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSubjectCustomization(subject.id, "Change Color")
                        }}
                      >
                        <Palette className="mr-2 h-4 w-4" />
                        Change Color
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <CardHeader className="pb-2 pt-3">
                <CardTitle
                  className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"} group-hover:text-orange-600 transition-colors duration-300`}
                >
                  {subject.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"} group-hover:text-orange-500 transition-colors duration-300`}
                >
                  Click to upload assignments
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Row - 2 subjects */}
        <div className="grid grid-cols-3 gap-8">
          {subjects.slice(3, 5).map((subject, index) => (
            <Card
              key={subject.id}
              className={`relative overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer group ${theme === "dark" ? "bg-gray-800 border-gray-600 shadow-2xl hover:shadow-gray-700/50" : "bg-white/90 backdrop-blur-sm border-amber-200 shadow-xl hover:shadow-2xl hover:shadow-amber-200/50"}`}
              onClick={() => handleSubjectClick(subject.name)}
              style={{
                animationDelay: `${(index + 3) * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="relative h-28 overflow-hidden -m-px">
                <img
                  src={subject.image || "/placeholder.svg"}
                  alt={subject.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${theme === "dark" ? "from-gray-900/60 to-transparent" : "from-amber-900/30 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`h-8 w-8 p-0 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-gray-800/80 hover:bg-gray-700 text-white" : "bg-white/80 hover:bg-white text-amber-900"} backdrop-blur-sm`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSubjectCustomization(subject.id, "Change Photo")
                        }}
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Change Photo
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSubjectCustomization(subject.id, "Change Color")
                        }}
                      >
                        <Palette className="mr-2 h-4 w-4" />
                        Change Color
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <CardHeader className="pb-2 pt-3">
                <CardTitle
                  className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"} group-hover:text-orange-600 transition-colors duration-300`}
                >
                  {subject.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"} group-hover:text-orange-500 transition-colors duration-300`}
                >
                  Click to upload assignments
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Right Sidebar - To-Do List */}
      <div
        className={`w-80 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-amber-200"} border-l p-6 shadow-xl`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>To-Do List</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAddTask(!showAddTask)}
            className={`h-8 w-8 p-0 rounded-full transition-all duration-300 hover:scale-110 ${theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-amber-100 text-amber-700"}`}
          >
            <Plus className={`h-4 w-4 transition-transform duration-300 ${showAddTask ? "rotate-45" : ""}`} />
          </Button>
        </div>

        {showAddTask && (
          <Card
            className={`p-4 mb-4 transition-all duration-300 ${theme === "dark" ? "bg-gray-700/50 border-gray-600" : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"} backdrop-blur-sm`}
          >
            <div className="space-y-3">
              <div>
                <Label
                  htmlFor="new-task"
                  className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}
                >
                  Task
                </Label>
                <Input
                  id="new-task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter new task..."
                  className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                />
              </div>
              <div>
                <Label
                  htmlFor="due-date"
                  className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}
                >
                  Due Date
                </Label>
                <Input
                  id="due-date"
                  value={newTaskDue}
                  onChange={(e) => setNewTaskDue(e.target.value)}
                  placeholder="e.g., Tomorrow, Friday..."
                  className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={addNewTask} size="sm" className="flex-1">
                  Add Task
                </Button>
                <Button variant="outline" onClick={() => setShowAddTask(false)} size="sm">
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}

        <div className="space-y-4">
          {todoItems.map((item) => (
            <Card
              key={item.id}
              className={`p-4 transition-all duration-300 ${theme === "dark" ? "bg-gray-700/50 border-gray-600" : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"} backdrop-blur-sm`}
            >
              <div className="flex items-start space-x-3">
                <Checkbox checked={item.completed} onCheckedChange={() => toggleTodoItem(item.id)} className="mt-1" />
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium ${item.completed ? "line-through text-gray-400" : theme === "dark" ? "text-white" : "text-amber-900"}`}
                  >
                    {item.task}
                  </p>
                  <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"} mt-1`}>
                    Due: {item.due}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeTask(item.id)}
                  className={`h-6 w-6 p-0 transition-all duration-300 ${theme === "dark" ? "text-gray-400 hover:text-red-500" : "text-amber-600 hover:text-red-500"}`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Button
          className="w-full mt-6 bg-transparent"
          variant="outline"
          onClick={() => setSelectedView("All Assignments View")}
        >
          View All Assignments
        </Button>
      </div>

      <Dialog open={showProfileModal} onOpenChange={setShowProfileModal}>
        <DialogContent
          className={`max-w-2xl transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-amber-200"}`}
        >
          <DialogHeader>
            <DialogTitle
              className={`text-2xl font-bold flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-amber-900"}`}
            >
              Student Profile
              {!isEditingProfile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsEditingProfile(true)
                    setEditedProfile(studentProfile)
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-beige-600" />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                    Full Name
                  </p>
                  {isEditingProfile ? (
                    <Input
                      value={editedProfile.name}
                      onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                      className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                    />
                  ) : (
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                      {studentProfile.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-beige-600" />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>Age</p>
                  {isEditingProfile ? (
                    <Input
                      type="number"
                      value={editedProfile.age}
                      onChange={(e) => setEditedProfile({ ...editedProfile, age: Number.parseInt(e.target.value) })}
                      className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                    />
                  ) : (
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                      {studentProfile.age} years old
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-beige-600" />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                    Birthday
                  </p>
                  {isEditingProfile ? (
                    <Input
                      value={editedProfile.birthday}
                      onChange={(e) => setEditedProfile({ ...editedProfile, birthday: e.target.value })}
                      className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                    />
                  ) : (
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                      {studentProfile.birthday}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-beige-600" />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                    Contact Number
                  </p>
                  {isEditingProfile ? (
                    <Input
                      value={editedProfile.contact}
                      onChange={(e) => setEditedProfile({ ...editedProfile, contact: e.target.value })}
                      className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                    />
                  ) : (
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                      {studentProfile.contact}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-beige-600" />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                    Student ID
                  </p>
                  {isEditingProfile ? (
                    <Input
                      value={editedProfile.studentId}
                      onChange={(e) => setEditedProfile({ ...editedProfile, studentId: e.target.value })}
                      className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                    />
                  ) : (
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                      {studentProfile.studentId}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>Email</p>
                {isEditingProfile ? (
                  <Input
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                  />
                ) : (
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                    {studentProfile.email}
                  </p>
                )}
              </div>
              <div>
                <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>Address</p>
                {isEditingProfile ? (
                  <Textarea
                    value={editedProfile.address}
                    onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
                    className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                  />
                ) : (
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                    {studentProfile.address}
                  </p>
                )}
              </div>
              <div>
                <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                  Emergency Contact
                </p>
                {isEditingProfile ? (
                  <Input
                    value={editedProfile.emergencyContact}
                    onChange={(e) => setEditedProfile({ ...editedProfile, emergencyContact: e.target.value })}
                    className={`mt-1 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-amber-300 text-amber-900"}`}
                  />
                ) : (
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                    {studentProfile.emergencyContact}
                  </p>
                )}
              </div>
            </div>
          </div>
          {isEditingProfile && (
            <div className="flex gap-2 pt-4">
              <Button onClick={handleSaveProfile} className="flex-1">
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                Cancel
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent
          className={`max-w-md transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-amber-200"}`}
        >
          <DialogHeader>
            <DialogTitle className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
              Upload Assignment - {selectedSubject}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-4">
            {!uploadType ? (
              <div className="space-y-4">
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                  Choose assignment type:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                    onClick={() => handleUploadTypeSelect("mcq")}
                  >
                    <CheckSquare className="h-6 w-6" />
                    <span>MCQ</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                    onClick={() => handleUploadTypeSelect("theory")}
                  >
                    <FileText className="h-6 w-6" />
                    <span>Theory</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Button variant="ghost" size="sm" onClick={() => setUploadType(null)}>
                    ← Back
                  </Button>
                  <Badge variant="outline">{uploadType.toUpperCase()}</Badge>
                </div>
                <div className="border-2 border-dashed border-beige-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-beige-400" />
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"} mb-2`}>
                    Upload your {uploadType} assignment
                  </p>
                  <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"} mb-4`}>
                    Supported formats: PDF, DOC, DOCX, JPG, PNG
                  </p>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <Button variant="outline" className="w-full bg-transparent">
                      <File className="mr-2 h-4 w-4" />
                      Choose File from Desktop
                    </Button>
                  </Label>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Badges Collection Modal */}
      <Dialog open={showBadgesModal} onOpenChange={setShowBadgesModal}>
        <DialogContent
          className={`max-w-4xl transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-amber-200"}`}
        >
          <DialogHeader>
            <DialogTitle className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
              Badge Collection
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4 max-h-96 overflow-y-auto">
            {badges.map((badge) => (
              <Card
                key={badge.id}
                className={`p-4 transition-all duration-300 ${theme === "dark" ? "bg-gray-700/50 border-gray-600" : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"} backdrop-blur-sm`}
              >
                <div className="flex items-start space-x-3">
                  <Award
                    className={`h-8 w-8 ${badge.type === "Gold" ? "text-yellow-500" : badge.type === "Silver" ? "text-gray-400" : "text-amber-600"}`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                        {badge.name}
                      </h3>
                      <Badge variant={badge.type === "Gold" ? "default" : "secondary"} className="text-xs">
                        {badge.type}
                      </Badge>
                    </div>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"} mb-1`}>
                      {badge.subject}
                    </p>
                    <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                      {badge.description}
                    </p>
                    <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"} mt-2`}>
                      Earned: {badge.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Progress Tracking Modal */}
      <Dialog open={showProgressModal} onOpenChange={setShowProgressModal}>
        <DialogContent
          className={`max-w-3xl transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-amber-200"}`}
        >
          <DialogHeader>
            <DialogTitle className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
              Academic Progress
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-6">
            <div className="bg-beige-50 p-4 rounded-lg">
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"} mb-3`}>
                Overall Progress
              </h3>
              <Progress value={progressData.overall} className="w-full h-3" />
              <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"} mt-2`}>
                {progressData.overall}% Complete
              </p>
            </div>
            <div className="space-y-4">
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                Subject Progress
              </h3>
              {progressData.subjects.map((subject) => (
                <div
                  key={subject.name}
                  className={`p-4 rounded-lg transition-all duration-300 ${theme === "dark" ? "bg-gray-700/50 border-gray-600" : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"} backdrop-blur-sm`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className={`font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                      {subject.name}
                    </h4>
                    <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                      {subject.completed}/{subject.assignments} assignments
                    </span>
                  </div>
                  <Progress value={subject.progress} className="w-full h-2" />
                  <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"} mt-1`}>
                    {subject.progress}% Complete
                  </p>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Marks Centre Modal */}
      <Dialog open={showMarksModal} onOpenChange={setShowMarksModal}>
        <DialogContent
          className={`max-w-5xl transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-amber-200"}`}
        >
          <DialogHeader>
            <DialogTitle className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
              Marks Centre
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 max-h-96 overflow-y-auto">
            {marksData.map((subjectData) => (
              <div key={subjectData.subject} className="mb-6">
                <h3
                  className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"} mb-3 border-b border-beige-200 pb-2`}
                >
                  {subjectData.subject}
                </h3>
                <div className="grid gap-3">
                  {subjectData.assignments.map((assignment, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 transition-all duration-300 ${theme === "dark" ? "bg-gray-700/50 border-gray-600" : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"} backdrop-blur-sm`}
                    >
                      <div>
                        <p className={`font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                          {assignment.name}
                        </p>
                        <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                          {assignment.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                          {assignment.marks}/{assignment.total}
                        </p>
                        <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                          {Math.round((assignment.marks / assignment.total) * 100)}%
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-2 p-2 bg-beige-100 rounded">
                    <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                      Total: {subjectData.assignments.reduce((sum, a) => sum + a.marks, 0)}/
                      {subjectData.assignments.reduce((sum, a) => sum + a.total, 0)}(
                      {Math.round(
                        (subjectData.assignments.reduce((sum, a) => sum + a.marks, 0) /
                          subjectData.assignments.reduce((sum, a) => sum + a.total, 0)) *
                          100,
                      )}
                      %)
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Assignment Feedback Modal */}
      <Dialog open={showFeedbackModal} onOpenChange={setShowFeedbackModal}>
        <DialogContent
          className={`max-w-4xl transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-amber-200"}`}
        >
          <DialogHeader>
            <DialogTitle className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
              Assignment Feedback
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 max-h-96 overflow-y-auto space-y-4">
            {assignmentFeedback.map((feedback, index) => (
              <Card
                key={index}
                className={`p-4 transition-all duration-300 ${theme === "dark" ? "bg-gray-700/50 border-gray-600" : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"} backdrop-blur-sm`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                        {feedback.subject} - {feedback.assignment}
                      </h3>
                      <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                        Teacher: {feedback.teacher}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">
                        {feedback.grade}
                      </Badge>
                      <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-amber-600"}`}>
                        {feedback.date}
                      </p>
                    </div>
                  </div>
                  <div className="bg-beige-50 p-3 rounded-lg">
                    <p className={`text-sm italic ${theme === "dark" ? "text-white" : "text-amber-900"}`}>
                      "{feedback.comment}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}