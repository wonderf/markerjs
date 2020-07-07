import { SvgHelper } from "../../helpers/SvgHelper";
import { PolygonMarkerBase } from "../PolygonMarkerBase";

export class PolygonMarker extends PolygonMarkerBase {
    public static createMarker = (): PolygonMarkerBase => {
        const marker = new PolygonMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'PolygonMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "line-marker"]]);
    }

    public manipulate = (ev: MouseEvent) => {
        
    }

}