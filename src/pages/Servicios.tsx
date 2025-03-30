import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Servicios() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Servicios
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Página de Servicios en construcción.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Servicios;
