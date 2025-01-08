import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  phrases: string[];
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <p className="text-xl text-cyan-300">
      <span>{currentText}</span>
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypewriterEffect;