const UserController = {};
const ENV = import.meta.env;
const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

UserController.getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/`, { method: "GET" });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

UserController.getById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "GET" });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

UserController.save = async (user) => {
  try {
    const res = await fetch(`${API_URL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Error al guardar usuario");
    }

    return data;
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
};

UserController.update = async (user) => {
  try {
    const res = await fetch(`${API_URL}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Error al actualizar usuario");
    }

    return data;
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
};

UserController.delete = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default UserController;
