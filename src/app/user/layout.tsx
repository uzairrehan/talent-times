import UserNavbar from "@/components/usernavbar";

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserNavbar />
      {children}
    </>
  );
}

export default UserLayout;
