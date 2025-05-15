import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import useUserCountry from '../hooks/useUserCountry';

interface LocationContextType {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  initialCountryLoading: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { countryCode, loading: ipLoading, error: ipError } = useUserCountry();
  const [selectedCountry, setSelectedCountry] = useState<string>('Colombia'); // Default to Colombia
  const [initialCountryLoading, setInitialCountryLoading] = useState<boolean>(true);

  useEffect(() => {
    setInitialCountryLoading(ipLoading);
    if (!ipLoading) {
      if (ipError || !countryCode) {
        setSelectedCountry('Colombia'); // Default on error or no code
      } else if (countryCode.toUpperCase() === 'VE') {
        setSelectedCountry('Venezuela');
      } else {
        // For any other country code, we can decide a default or keep it as is.
        // For now, let's assume 'Colombia' is the primary non-Venezuela target.
        // Or, you could try to map more country codes if needed.
        setSelectedCountry('Colombia'); // Or map to a more generic default if preferred
      }
    }
  }, [countryCode, ipLoading, ipError]);

  // Allow manual override to take precedence once initial load is done
  const handleSetSelectedCountry = (country: string) => {
    setSelectedCountry(country);
    // If user manually selects, we are no longer in the "initial" loading phase for that choice
    if (initialCountryLoading) {
        setInitialCountryLoading(false);
    }
  };

  return (
    <LocationContext.Provider value={{ selectedCountry, setSelectedCountry: handleSetSelectedCountry, initialCountryLoading }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};