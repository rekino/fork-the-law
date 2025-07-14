import { IconWorld } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Link, useParams } from "@tanstack/react-router"

export default function Navbar() {
  const params = useParams({ strict: false })

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-800">
              Constitution Editor
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Home
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Explore
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              About
            </a>
          </div>

          {/* Right side - Language Switcher */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <IconWorld className="h-4 w-4 text-slate-600" />
              <Button variant="link" size="sm">
                <Link to="." params={{...params, locale: 'en' }}>English</Link>
              </Button>
              <Button variant="link" size="sm">
                <Link to="." params={{...params, locale: 'fa' }}>فارسی</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}