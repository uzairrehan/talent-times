import Navbar from "@/components/navbar";

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default UserLayout;
