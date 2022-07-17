import {configureStore} from '@reduxjs/toolkit'
import QuoteReducer from './QuoteSlice';

export default configureStore ({
  reducer: {
    quote: QuoteReducer
  }
});