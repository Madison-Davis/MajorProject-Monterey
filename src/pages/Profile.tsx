// File: src/pages/Profile.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Textarea } from "../components/ui/Textarea"
import { LineChart, Medal } from "lucide-react"

export default function Profile() {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {/* Left Column */}
      <div className="col-span-1">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <p className="text-muted-foreground">Manage your personal info and view stats.</p>
      </div>

      {/* Right Column */}
      <div className="col-span-3">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <Input placeholder="your_username" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <Textarea placeholder="Tell us a little about yourself..." />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats">
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Investments</CardTitle>
                  <LineChart className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">📈 $12,340 in tech stocks</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Awards</CardTitle>
                  <Medal className="h-5 w-5 text-yellow-500" />
                </CardHeader>
                <CardContent className="flex gap-2">
                  <span className="text-2xl">🥇</span>
                  <span className="text-2xl">🏆</span>
                  <span className="text-2xl">🎖️</span>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
