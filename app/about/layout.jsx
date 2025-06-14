import Footer from "@/components/Footer";

export const metadata = {
  title: "Dony | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
