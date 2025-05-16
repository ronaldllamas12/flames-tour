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
  const numeroWhatsApp = "+573022265668";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(numPersonas, 10) <= 0) {
      alert("El número de personas debe ser mayor a 0.");
      return;
    }

    const mensaje = `
      DATOS DE RESREVA:

      Nombre Completo:  ${nombreCompleto}
      Dirección:  ${direccion}
      Teléfono:  ${telefono}
      Número de Personas:  ${numPersonas}
      Email:  ${email}
      Destino:  ${destino}
      Fecha de Inicio:  ${fechaInicio ? fechaInicio.toLocaleDateString() : 'No especificada'}
    
    `;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Logo animado de fondo */}
      

      {/* Formulario */}
      <form
      onSubmit={handleSubmit}
      className=" z-10 w-full max-w-xl p-8 bg-gray-700 bg-opacity-15 backdrop-blur-xl rounded-2xl shadow-xl space-y-4 mx-4 md:mx-0"
    >
      {/* ...campos del formulario como ya los tienes */}
    
        <div>
          <label htmlFor="nombreCompleto" className="block text-black text-sm font-bold mb-1">
            Nombre Completo:
          </label>
          <input
            type="text"
            id="nombreCompleto"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
            className="shadow border rounded w-full py-1 px-2 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="direccion" className="block text-black text-sm font-bold mb-1">
            Dirección:
          </label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
            className="shadow border rounded w-full py-1 px-2 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-black text-sm font-bold mb-1">
            Teléfono:
          </label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            className="shadow border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="numPersonas" className="block text-black text-sm font-bold mb-1">
            Número de Personas a Reservar:
          </label>
          <input
            type="number"
            id="numPersonas"
            value={numPersonas}
            onChange={(e) => {
              const value = e.target.value;
              if (parseInt(value, 10) > 0) {
                setNumPersonas(value);
              }
            }}
            required
            className="shadow border rounded w-full py-1 px-2 text-black leading-tight focus:outline-none focus:shadow-outline"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="email" className=" text-black text-sm font-bold mb-1">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow border rounded w-full py-1 px-2 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="destino" className="block text-black text-sm font-bold mb-1">
            Destino:
          </label>
          <select
            id="destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            required
            className="shadow border rounded w-full py-1 px-2 text-black leading-tight focus:outline-none focus:shadow-outline"
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
          <label className="block text-black text-sm font-bold mb-1">
            Fecha de Inicio:
          </label>
          <DatePicker
            selected={fechaInicio}
            onChange={(date: Date | null) => setFechaInicio(date)}
            dateFormat="dd/MM/yyyy"
            className="shadow border rounded  py-1 px-1 text-black leading-tight focus:outline-none focus:shadow-outline"
            placeholderText="Seleccione la fecha de inicio"
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline mr-6"
          >
            Reservar
          </button>
          <a
            href="/"
            className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  );
};

export default ReservaForm;
