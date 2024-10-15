import CompanyNavbar from "@/components/companynavbar";
import JobCard from "@/components/jobcard";
import UserNavbar from "@/components/usernavbar";

const user = {
  role : "company"
}
export default function Home() {
  return (
    <>
    {user.role === "company" ? <CompanyNavbar/> :<UserNavbar/> }
      {/* <div className="min-h-screen flex items-center justify-center">
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
    </div> */}
      <div className="min-h-screen flex items-center flex-col justify-center gap-4 p-4">
        <JobCard
          title={"Software Engineer"}
          companyName={"Acme Inc"}
          location={"San Francisco, CA"}
          fromSalary={120000}
          toSalary={150000}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
          }
          datePosted={new Date()}
          badges={"2435345"}
          easyApplyLink={"534534"}
          firebaseID={"6435786485"}
        />
                <JobCard
          title={"Software Engineer"}
          companyName={"Acme Inc"}
          location={"San Francisco, CA"}
          fromSalary={120000}
          toSalary={150000}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
          }
          datePosted={new Date()}
          badges={"2435345"}
          easyApplyLink={"534534"}
          firebaseID={"6435786485"}
        />
                <JobCard
          title={"Software Engineer"}
          companyName={"Acme Inc"}
          location={"San Francisco, CA"}
          fromSalary={120000}
          toSalary={150000}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
          }
          datePosted={new Date()}
          badges={"2435345"}
          easyApplyLink={"534534"}
          firebaseID={"6435786485"}
        />
                <JobCard
          title={"Software Engineer"}
          companyName={"Acme Inc"}
          location={"San Francisco, CA"}
          fromSalary={120000}
          toSalary={150000}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
          }
          datePosted={new Date()}
          badges={"2435345"}
          easyApplyLink={"534534"}
          firebaseID={"6435786485"}
        />
                <JobCard
          title={"Software Engineer"}
          companyName={"Acme Inc"}
          location={"San Francisco, CA"}
          fromSalary={120000}
          toSalary={150000}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
          }
          datePosted={new Date()}
          badges={"2435345"}
          easyApplyLink={"534534"}
          firebaseID={"6435786485"}
        />
                <JobCard
          title={"Software Engineer"}
          companyName={"Acme Inc"}
          location={"San Francisco, CA"}
          fromSalary={120000}
          toSalary={150000}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
          }
          datePosted={new Date()}
          badges={"2435345"}
          easyApplyLink={"534534"}
          firebaseID={"6435786485"}
        />
                <JobCard
          title={"Software Engineer"}
          companyName={"Acme Inc"}
          location={"San Francisco, CA"}
          fromSalary={120000}
          toSalary={150000}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
          }
          datePosted={new Date()}
          badges={"2435345"}
          easyApplyLink={"534534"}
          firebaseID={"6435786485"}
        />
        
        <JobCard
          title={"Software Engineer"}
          companyName={"Acme Inc"}
          location={"San Francisco, CA"}
          fromSalary={120000}
          toSalary={150000}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
          }
          datePosted={new Date()}
          badges={"2435345"}
          easyApplyLink={"534534"}
          firebaseID={"6435786485"}
        />
      </div>
    </>
  );
}
