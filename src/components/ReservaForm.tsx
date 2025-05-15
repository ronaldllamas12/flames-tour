import React, { useState } from "react";
import { tourPackages } from "./TourPackages";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservaForm = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [numPersonas, setNumPersonas] = useState("");
  const [email, setEmail] = useState("");
  const [destino, setDestino] = useState("");
  const [fechaInicio, setFechaInicio] = useState<Date | null>(null);
  const [fechaFin, setFechaFin] = useState<Date | null>(null);
  const numeroWhatsApp = "+573022265668";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(numPersonas, 10) <= 0) {
      alert("El número de personas debe ser mayor a 0.");
      return;
    }

    const mensaje = `
      Nueva Reserva:
      Nombre Completo: ${nombreCompleto}
      Dirección: ${direccion}
      Teléfono: ${telefono}
      Número de Personas: ${numPersonas}
      Email: ${email}
      Destino: ${destino}
      Fecha de Inicio: ${fechaInicio ? fechaInicio.toLocaleDateString() : 'No especificada'}
      Fecha de Fin: ${fechaFin ? fechaFin.toLocaleDateString() : 'No especificada'}
    `;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Logo animado de fondo */}
       <div className="absolute inset-0 z-0">
      <img
        src="/imagenes/logo.png" // Asegúrate de que este path sea correcto
        alt="Logo de fondo"
        className="w-full h-full object-cover opacity-10 animate-zoom"
      />
    </div>

      {/* Formulario */}
      <form
      onSubmit={handleSubmit}
      className="relative z-10 w-full max-w-lg p-6 bg-white bg-opacity-15 backdrop-blur-md rounded-2xl shadow-xl space-y-4 mx-4"
    >
      {/* ...campos del formulario como ya los tienes */}
    
        <div>
          <label htmlFor="nombreCompleto" className="block text-white text-sm font-bold mb-2">
            Nombre Completo:
          </label>
          <input
            type="text"
            id="nombreCompleto"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
            className="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="direccion" className="block text-white text-sm font-bold mb-2">
            Dirección:
          </label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
            className="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-white text-sm font-bold mb-2">
            Teléfono:
          </label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="numPersonas" className="block text-white text-sm font-bold mb-2">
            Número de Personas a Reservar:
          </label>
          <input
            type="number"
            id="numPersonas"
            value={numPersonas}
            onChange={(e) => {
              const value = e.target.value;
              if (parseInt(value, 10) >= 0) {
                setNumPersonas(value);
              }
            }}
            required
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="destino" className="block text-white text-sm font-bold mb-2">
            Destino:
          </label>
          <select
            id="destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            required
            className="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Seleccione un destino</option>
            {tourPackages.map((pkg) => (
              <option key={pkg.id} value={pkg.title}>
                {pkg.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-white text-sm font-bold mb-2">
            Fecha de Inicio:
          </label>
          <DatePicker
            selected={fechaInicio}
            onChange={(date: Date) => setFechaInicio(date)}
            dateFormat="dd/MM/yyyy"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholderText="Seleccione la fecha de inicio"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-bold mb-2">
            Fecha de Fin:
          </label>
          <DatePicker
            selected={fechaFin}
            onChange={(date: Date) => setFechaFin(date)}
            dateFormat="dd/MM/yyyy"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholderText="Seleccione la fecha de fin"
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          >
            Reservar
          </button>
          <a
            href="/"
            className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  );
};

export default ReservaForm;
