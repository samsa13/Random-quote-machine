import './App.scss';
import Quote from './Components/Quote';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { changeQuote } from './Store/QuoteSlice'

function App() {


  const currentQuote = useSelector(state => state.quote.quote);
  const currentAuthor = useSelector(state => state.quote.author);

  const dispatch = useDispatch();
  const setNewQuote = () => dispatch(changeQuote());


  return (
    

    <wrapper id="quote-box">
      <Quote />
      <button id="new-quote" onClick={setNewQuote} >New quote</button>
      <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=" + currentAuthor + "&text=" + currentQuote} target="_blank" rel='tweet quote'>Tweeet quote</a>
    </wrapper>

  );
}

export default App;
