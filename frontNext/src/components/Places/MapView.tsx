import React, { useEffect, useRef } from 'react';
import type { Place } from '../../types';

interface MapViewProps {
  places: Place[];
  height?: string;
}

export const MapView: React.FC<MapViewProps> = ({ places, height = '500px' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Limpiar canvas
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar grid
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // Dibujar lugares
    places.forEach((place, index) => {
      const longitude = place.longitude ?? 0;
      const latitude = place.latitude ?? 0;
      const x = (longitude + 180) * (canvas.width / 360);
      const y = (90 - latitude) * (canvas.height / 180);

      // Círculo del lugar
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Borde
      ctx.strokeStyle = '#1e40af';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Número
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText((index + 1).toString(), x, y);
    });

    // Título
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Mapa de Lugares', 10, 20);
  }, [places]);

  return (
    <div className="w-full border rounded-lg shadow-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        width={800}
        height={parseInt(height)}
        className="w-full"
      />
      <div className="bg-white p-4 border-t">
        <p className="text-sm text-gray-600">
          {places.length} lugar{places.length !== 1 ? 'es' : ''} mostrado{places.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
};
