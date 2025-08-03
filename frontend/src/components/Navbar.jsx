import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-base-100 border-b border-base-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary font-mono">
          ThinkerBoard
        </h1>

        <Link to="/create" className="btn btn-warning flex items-center gap-2">
          <Plus size={18} />
          <span>New Note</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
