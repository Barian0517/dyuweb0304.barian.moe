export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#2c1e14] flex flex-col sm:flex-row justify-between items-center py-8 px-8 md:px-12 bg-[#2c1e14] text-[#fdfcf0]">
      <div className="mb-4 sm:mb-0 text-center sm:text-left text-xs uppercase tracking-widest opacity-60">
        Twelve Kingdoms Unofficial Guide
      </div>
      <div>
        <p className="text-sm">
          <a
            href="https://barian.moe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b34d3d] hover:underline transition-colors font-medium"
          >
            幽影櫻
          </a>
          {' '}製作
        </p>
      </div>
    </footer>
  );
}
