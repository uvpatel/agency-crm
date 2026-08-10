"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"

export default function LeadsPage() {
  return (
    <div className="flex flex-col gap-4 overflow-auto">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Leads
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage and track your leads
          </p>
        </div>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="warm">Warm</TabsTrigger>
            <TabsTrigger value="cold">Cold</TabsTrigger>
          </TabsList>
        </Tabs>
      </header>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Leads</CardTitle>
          <Select defaultValue="name">
            <SelectTrigger className="w-[180px]" aria-label="Sort by">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="date">Date Created</SelectItem>
              <SelectItem value="stage">Stage</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
         
        </CardContent>
      </Card>
    </div>
  )
}
