function NavbarItem({ title, image }) {
  return (
    <div className="navbar navbar__item">
      <h3 className="navbar__title">{title}</h3>
      <img
        src={require(`../../assest/img/${image}.jpg`)}
        className="genre navbar__item__image"
      />
    </div>
  );
}
function NavbarList() {
  return (
    <>
      <NavbarItem image={14} title="Rock" />
      <NavbarItem image={12} title="Chill Mood" />
      <NavbarItem image={13} title="Weekends" />
      <NavbarItem image={11} title="Happy Pop" />
      <NavbarItem image={15} title="Focus" />
    </>
  );
}
export default function AppNavbar() {
  return (
    <div className="navbar__list">
      <NavbarList />
    </div>
  );
}
