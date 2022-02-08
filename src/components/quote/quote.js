import QuoteLayer from './layer';
import './quote.css';
function Quote(){
    return(
        <div className='section1'>
            <QuoteLayer/>
            <h7> <span className='quote'>“ <br/></span> Bitcoin is a technological <br/>tour 
            de force<br/> <br/>- Bill Gates <br/><span className='quote1'>”</span></h7>    
        </div>
    )
}
export default Quote;