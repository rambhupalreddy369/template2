import classes from './title.module.css';
import Flower from '../flower/flower';
import Layer from '../layers/layer1';
import Layer2 from '../layers/layer2';
import Text from '../header';

function TitlePage(){
    return(
        <div className={classes.layout}>
            <div className={classes.head}>
                <Flower/>
                <Layer/>
            </div>
            <Text/>
            <Layer2/>
        </div>
    );
}

export default TitlePage;