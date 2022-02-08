
import Layer3 from './comps/layer3';
import Layer4 from './comps/layer4';
import './subtitle.css';

function SubtitlePage(){
    return(
        <div className='Section'>
            <div className='text'>
                <h3>How blockchain<br/>technology works <br/> part 4:</h3>
                <h4>Longest Chain <br/>Rule</h4>
            </div>
            <Layer3/>
            <Layer4/>
        </div>
    )
}

export default SubtitlePage;