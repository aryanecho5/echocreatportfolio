const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] opacity-5 pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(12, 175, 96, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(12, 175, 96, 0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      ></div>
    </div>
  );
};

export default GridBackground;
