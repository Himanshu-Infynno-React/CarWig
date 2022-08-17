import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default () => (
    <>
        <Slider trackStyle={{ background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)', height: 6 }}
            handleStyle={{
                borderColor: ' #FFFFFF',
                width: 20,
                height: 20,
                // marginLeft: -14,
                marginTop: -8,
                background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)',
                boxShadow : "0px 3px 7px -1px rgba(254, 110, 6, 0.46)"
            }}
            railStyle={{ backgroundColor: ' #EBEBF0', height: 6 }}
            range min={10} max={100} />
    </>
);