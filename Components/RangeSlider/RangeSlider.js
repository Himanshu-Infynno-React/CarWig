import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default () => (
    <>
        <Slider trackStyle={{ backgroundColor: 'orange', height: 6 }}
            handleStyle={{
                borderColor: ' #FFFFFF',
                width: 20,
                height: 20,
                // marginLeft: -14,
                marginTop: -8,
                backgroundColor: 'red',
                boxShadow : "0px 3px 7px -1px rgba(254, 110, 6, 0.46)"
            }}
            railStyle={{ backgroundColor: ' #EBEBF0', height: 6 }}
            range min={10} max={100} />
    </>
);