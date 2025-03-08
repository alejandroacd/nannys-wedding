'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';

function LanguageSelectionDialog() {
  const { changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already selected a language
    const hasSelectedLanguage = localStorage.getItem('hasSelectedLanguage');
    if (!hasSelectedLanguage) {
      setIsOpen(true); // Show the dialog if no language is selected
    }
  }, []);

  const handleLanguageSelect = (language: 'en' | 'es') => {
    changeLanguage(language); // Change the language in the context
    localStorage.setItem('hasSelectedLanguage', 'true'); // Save the selection
    localStorage.setItem('preferredLanguage', language); // Save the preferred language
    setIsOpen(false); // Close the dialog
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={`${montserrat.className} sm:max-w-md`}>
        <DialogHeader>
          <DialogTitle>Hi! Can you choose your language? ✨
</DialogTitle>
          <DialogDescription>
          We'd love for you to feel at home! Please select your preferred language.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Card
            className="p-4 items-center flex flex-row justify-between cursor-pointer hover:bg-primary/10 transition-colors"
            onClick={() => handleLanguageSelect('en')}
          >
            <div className='flex flex-col'>
            <h3 className="text-lg font-semibold text-primary">English</h3>
            <p className="text-sm text-muted-foreground">
              Continue in English
            </p>
            </div>  
            🇺🇸
          </Card>
          <Card
            className="p-4 flex flex-row justify-between  items-center cursor-pointer hover:bg-primary/10 transition-colors"
            onClick={() => handleLanguageSelect('es')}
          >
            <div className='flex flex-col'>
            <h3 className="text-lg font-semibold text-primary">Español</h3>
            <p className="text-sm text-muted-foreground">
              Continuar en Español
            </p>
            </div>
           
            🇪🇸
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LanguageSelectionDialog;