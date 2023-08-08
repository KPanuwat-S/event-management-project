import MainHeader from "./MainHeader";

function Layout(props: { children: JSX.Element }) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
