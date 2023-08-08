import MainHeader from "./MainHeader";

function Layout(props: { children: JSX.Element }) {
  const { children } = props;
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
