import { useState, useEffect } from 'react';

interface LocationData {
  country_code: string;
  // Add other fields from the API if needed
}

const useUserCountry = () => {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: LocationData = await response.json();
        setCountryCode(data.country_code);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        console.error("Failed to fetch user country:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryCode();
  }, []);

  return { countryCode, loading, error };
};

export default useUserCountry;
