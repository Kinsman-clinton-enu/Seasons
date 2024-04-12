/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import 'semantic-ui-css/semantic.min.css'
import '../seasonDisplay.css'

function getSeason(lat, month) {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig ={
    summer: {text: "let's hit the beach", iconName: 'sun'},
    winter: {text: "Burr, it's chilly", iconName: 'snowflake'}
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth);
    const {text, iconName} = seasonConfig[season];
    return( 
    <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} icon massive`}></i>
        <h1>{text}</h1>
        <i className={`icon-right ${iconName} icon massive`}></i>
    </div>
    )
}

export default SeasonDisplay;