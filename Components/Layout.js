import Nav from "../app/auth/Nav.js";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="py-5 px-4 md:px-48 lg:px-96">{children}</main>
    </>
  );
}
