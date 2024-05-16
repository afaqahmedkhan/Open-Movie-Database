import { useState } from 'react';

export function useErrorHandler(): { error: string | null, handleError: (message: string | null) => void } {
  const [error, setError] = useState<string | null>(null);

  const handleError = (message: string | null) => {
    setError(message);
  };

  return { error, handleError };
}
