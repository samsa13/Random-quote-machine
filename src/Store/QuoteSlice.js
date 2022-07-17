import { createSlice } from '@reduxjs/toolkit'
import { QUOTES_BANK } from '../Components/QuotesBank'


const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: QUOTES_BANK[0].quote,
    author: QUOTES_BANK[0].author
  }
  ,
  reducers: {
    changeQuote(state, action) {
      let randomNum = Math.floor(Math.random() * QUOTES_BANK.length);

      state.quote = QUOTES_BANK[randomNum].quote;
      state.author = QUOTES_BANK[randomNum].author;
    }
  }
});

export const { changeQuote } = quoteSlice.actions;
export default quoteSlice.reducer;