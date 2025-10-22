import UsersView from "./modules/users.view";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Gestión de Usuarios</a>
        </div>
      </nav>

      <UsersView />
    </>
  );
}

export default App;