import React, { useState } from "react";
import { tourPackages } from "./TourPackages";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservaForm: React.FC = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [numPersonas, setNumPersonas] = useState("");
  const [email, setEmail] = useState("");
  const [destino, setDestino] = useState("");
  const [fechaInicio, setFechaInicio] = useState<Date | null>(null);
  const numeroWhatsApp = "+573022265668";

  const sendToWhatsApp = () => {
    const message = `¡Hola! Soy ${nombreCompleto},\nmi correo es ${email}.\nEstoy interesado en: ${destino}.\nDirección: ${direccion}.\nTeléfono: ${telefono}.\nNúmero de Personas: ${numPersonas}.\nFecha de Inicio: ${fechaInicio ? fechaInicio.toLocaleDateString() : 'No especificada'}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ajax/ronaldllamas17@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombreCompleto,
          direccion,
          telefono,
          numPersonas,
          email,
          destino,
          fechaInicio: fechaInicio?.toLocaleDateString() || "No especificada",
          _subject: "¡RESERVA DE FLAMES TOUR!",
          _captcha: "false",
          _template: "table",
        }),
      });

      if (response.ok) {
        alert("Reserva enviada correctamente. Serás redirigido en unos segundos.");
        sendToWhatsApp();
        setTimeout(() => {
          window.location.href = "/";
        }, 8000);
      } else {
        alert("Hubo un error al enviar la reserva. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error inesperado.");
    }
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="z-10 w-lg max-w-sm p-10 bg-gray-500 bg-opacity-60 backdrop-blur-xl rounded-xl shadow-xl space-y-3 mx-8 md:mx-2"
      >
        <div className="LOGO flex justify-center">
          <img src="/imagenes/logo.png" alt="logo" className="w-24 h-auto" />
        </div>

        <input
          placeholder="Nombre Completo"
          type="text"
          name="nombreCompleto"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
          className="shadow border rounded w-full py-1 px-2 text-black"
        />

        <input
          placeholder="Dirección"
          type="text"
          name="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
          className="shadow border rounded w-full py-1 px-2 text-black"
        />

        <input
          placeholder="Teléfono"
          type="tel"
          name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
          className="shadow border rounded w-full py-1 px-2 text-black"
        />

        <input
          placeholder="Número de Personas"
          type="number"
          name="numPersonas"
          min="1"
          value={numPersonas}
          onChange={(e) => setNumPersonas(e.target.value)}
          required
          className="shadow border rounded w-full py-1 px-2 text-black"
        />

        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="shadow border rounded w-full py-1 px-2 text-black"
        />

        <select
          name="destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          required
          className="shadow border rounded w-full py-1 px-2 text-black"
        >
          <option value="">Seleccione un destino</option>
          {tourPackages.map((pkg) => (
            <option key={pkg.id} value={pkg.title}>
              {pkg.title}
            </option>
          ))}
        </select>

        <div>
          <label className="block text-black text-sm font-bold mb-1">
            Fecha de Inicio:
          </label>
          <DatePicker
            selected={fechaInicio}
            onChange={(date: Date | null) => setFechaInicio(date)}
            dateFormat="dd/MM/yyyy"
            className="shadow border rounded py-1 px-1 text-black"
            placeholderText="Seleccione la fecha de inicio"
            name="fechaInicio"
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded mr-6"
          >
            Reservar
          </button>
          <a
            href="/"
            className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-8 rounded"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  );
};

export default ReservaForm;
