import { SvgHelper } from "../../helpers/SvgHelper";
import { RectMarkerBase } from "../RectMarkerBase";

export class CoverMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new CoverMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'CoverMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "cover-marker"]]);
    }

}
