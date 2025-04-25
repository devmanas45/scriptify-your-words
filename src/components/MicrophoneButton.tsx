
import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface MicrophoneButtonProps {
  onTranscriptionResult: (text: string) => void;
}

const MicrophoneButton = ({ onTranscriptionResult }: MicrophoneButtonProps) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      
      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
          
        onTranscriptionResult(transcript);
      };
      
      recognitionInstance.onerror = (event) => {
        toast.error('Error occurred in recognition: ' + event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.start();
      setRecognition(recognitionInstance);
      setIsListening(true);
      toast.success('Listening...');
    } else {
      toast.error('Speech recognition is not supported in your browser');
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
      toast.success('Stopped listening');
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={isListening ? stopListening : startListening}
      title={isListening ? "Stop listening" : "Start listening"}
    >
      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
    </Button>
  );
};

export default MicrophoneButton;
