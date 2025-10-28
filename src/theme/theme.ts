// Copyright (c) 2025 Isis Astros. All rights reserved.

import { createTheme } from '@mui/material/styles';
import '../assets/fonts/fonts.css';

const CAUDEX_FONT = "Caudex, Arial, sans-serif";

export const theme = createTheme({
  typography: {
    fontFamily: CAUDEX_FONT,
    allVariants: {
      fontFamily: CAUDEX_FONT,
    },
  },
});