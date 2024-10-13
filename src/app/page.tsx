import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card"
import { Construction } from "lucide-react"

export default function Home() {
  return (<>
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex items-center justify-center space-x-2">
            <Construction className="h-6 w-6" />
            <span>Site Under Construction</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Full kaam chalu he ! 👨🏻‍🏭 <br />Please check back soon!
          </p>
        </CardContent>

      </Card>
    </div>
  </>);
}
