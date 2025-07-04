
import React from 'react';
import { Heart, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Saarthi</h1>
            <p className="text-sm text-muted-foreground">स्वास्थ्य योजना सहायक</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button variant="ghost" size="sm">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
