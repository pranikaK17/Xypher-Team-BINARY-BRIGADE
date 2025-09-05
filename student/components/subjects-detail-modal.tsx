"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, FileText, Calendar, Award, TrendingUp } from "lucide-react"

interface SubjectDetailModalProps {
  isOpen: boolean
  onClose: () => void
  subjectName: string
}

export function SubjectDetailModal({ isOpen, onClose, subjectName }: SubjectDetailModalProps) {
  const mockAssignments = [
    { id: 1, title: "Chapter 5 Homework", due: "Tomorrow", status: "pending", grade: null },
    { id: 2, title: "Midterm Exam", due: "Next Week", status: "upcoming", grade: null },
    { id: 3, title: "Lab Report #3", due: "Last Week", status: "graded", grade: "A-" },
  ]

  const mockResources = [
    { id: 1, title: "Textbook Chapter 5", type: "reading" },
    { id: 2, title: "Practice Problems", type: "worksheet" },
    { id: 3, title: "Video Lecture", type: "video" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{subjectName}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Assignments Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Assignments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{assignment.title}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Due: {assignment.due}
                    </p>
                  </div>
                  <div className="text-right">
                    {assignment.grade ? (
                      <Badge variant="secondary">{assignment.grade}</Badge>
                    ) : (
                      <Badge variant="outline">{assignment.status}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resources Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Study Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockResources.map((resource) => (
                <div
                  key={resource.id}
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{resource.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">{resource.type}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Progress Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Progress Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Course Completion</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Assignment Average</span>
                  <span>B+</span>
                </div>
                <Progress value={85} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Assignments Completed</span>
                <span className="font-semibold">12/15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Current Grade</span>
                <Badge variant="secondary">B+</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Next Assignment</span>
                <span className="text-sm font-medium">Tomorrow</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>View Full Course</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}