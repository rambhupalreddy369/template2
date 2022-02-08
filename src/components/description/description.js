import classes from './description.module.css';

function DescriptionPage(){
    return(
        <div className={classes.section}>
            <div className={classes.subtitle}>
                <div className={classes.text}>
                    <h1>Blockchain</h1>
                    <div className={classes.description}>
                        <p>Blockchain technology is a system <br/>
                        in which a record of transactions <br/>
                        made in bitcoin or another <br/>
                        cryptocurrency are maintained <br/>
                        across sevevral computers that are <br/>
                        linked in a peer-to-peer network</p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionPage;