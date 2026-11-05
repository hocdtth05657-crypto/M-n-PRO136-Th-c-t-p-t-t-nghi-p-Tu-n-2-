import React, { useState, useRef, useCallback } from 'react';
import { History, Sparkles, MoveHorizontal } from 'lucide-react';

interface HistoricalComparisonSliderProps {
  vintageImage: string;
  vintageYear: string | number;
  vintageLabel?: string;
  modernImage: string;
  modernYear: string | number;
  modernLabel?: string;
  siteName: string;
  caption?: string;
}

export const HistoricalComparisonSlider: React.FC<HistoricalComparisonSliderProps> = ({
  vintageImage,
  vintageYear,
  vintageLabel = 'Ảnh tư liệu lưu trữ',
  modernImage,
  modernYear,
  modernLabel = 'Hiện trạng ngày nay',
  siteName,
  caption
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs text-[#786F66]">
        <span className="flex items-center gap-1.5 font-medium text-[#1C1917]">
          <History className="w-3.5 h-3.5 text-[#8C3A27]" />
          <span>Thước đo thời gian: Đối sánh Xưa & Nay</span>
        </span>
        <span className="text-[11px]">Kéo con trượt để so sánh qua các thế kỷ</span>
      </div>

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-80 sm:h-96 md:h-[420px] rounded-lg overflow-hidden select-none cursor-ew-resize bg-[#2A2421] border border-[#DDD4C5] shadow-inner"
      >
        {/* Right side: Modern Image (Full width background) */}
        <img
          src={modernImage}
          alt={`${siteName} hiện tại`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Right side badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded font-medium z-10">
          {modernLabel} · {modernYear}
        </div>

        {/* Left side: Vintage Archival Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={vintageImage}
            alt={`${siteName} tư liệu xưa`}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              maxWidth: 'none'
            }}
          />
          {/* Vintage label */}
          <div className="absolute top-3 left-3 bg-[#2A2421]/80 backdrop-blur-xs text-[#E7C794] text-[11px] px-2.5 py-1 rounded font-medium border border-[#E7C794]/30 z-10">
            {vintageLabel} · {vintageYear}
          </div>
        </div>

        {/* Divider line and handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#1C1917] flex items-center justify-center shadow-xl border border-[#DDD4C5]">
            <MoveHorizontal className="w-4 h-4 text-[#8C3A27]" />
          </div>
        </div>
      </div>

      {caption && (
        <p className="text-xs font-serif italic text-[#786F66] text-center pt-1">
          {caption}
        </p>
      )}
    </div>
  );
};
