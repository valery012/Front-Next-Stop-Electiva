import React, { useState } from 'react';

interface CreatePlaceFormProps {
  onSubmit: (data: {
    name: string;
    description: string;
    category: string;
    latitude: number;
    longitude: number;
  }) => void;
}

export const CreatePlaceForm: React.FC<CreatePlaceFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes('latitude') || name.includes('longitude') ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', category: '', latitude: 0, longitude: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Crear Nuevo Lugar</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Nombre del lugar"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Describe el lugar"
          rows={4}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Categoría</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="">Selecciona una categoría</option>
          <option value="restaurant">Restaurante</option>
          <option value="park">Parque</option>
          <option value="museum">Museo</option>
          <option value="hotel">Hotel</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Latitud</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            step="0.0001"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Longitud</label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            step="0.0001"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Crear Lugar
      </button>
    </form>
  );
};
