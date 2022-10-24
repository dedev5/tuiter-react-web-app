import Assignment6 from "./a6";
import Nav from "../nav";



function Classes() {
    const color = 'blue';
    const dangerous = true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                   wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background</div>

        </div>
    );
};
function Labs() {
    return (
        <div>
            <Nav/>
            <Assignment6/>
            <Classes/>
        </div>
    );
}
export default Labs;