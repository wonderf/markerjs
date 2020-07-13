import { SvgHelper } from "./../helpers/SvgHelper";
import { PolygonMarkerBaseState } from "./PolygonMarkerBaseState";
import { MarkerBase } from "./MarkerBase";
import { ResizeGrip } from "./ResizeGrip";

export class PolygonMarkerBase extends MarkerBase {
    public static createMarker = (): PolygonMarkerBase => {
        const marker = new PolygonMarkerBase();
        marker.setup();
        return marker;
    }

    protected markerLine: SVGLineElement;

    protected previousState: PolygonMarkerBaseState;

    private readonly MIN_LENGTH = 20;

    private markerBgLine: SVGLineElement; // touch target

    private controlBox: SVGGElement;

    private path: number[][] = [];
    private rect: boolean = false;

    public endManipulation(ev?: MouseEvent) {
        super.endManipulation();
        if(ev)
            this.drawTo(ev.offsetX, ev.offsetY);
        this.previousState = this.getState();
    }

    public getState(): PolygonMarkerBaseState {
        const state: PolygonMarkerBaseState = Object.assign(
            {
                path: this.path,
                rect: this.rect,
            },
            super.getState(),
        );
        return state;
    }

    public completeRect() {
        this.drawTo(this.path[0][0],this.path[0][1]);
        this.rect = true;
    }

    public restoreState(state: PolygonMarkerBaseState) {
        this.path = state.path;
        this.rect = state.rect;
        if(this.rect){
            this.path.push(this.path[0]);
        }
        this.adjustPath();
    }

    protected setup() {
        //super.setup();

        this.visual = SvgHelper.createGroup();
        // translate
        this.visual.transform.baseVal.appendItem(SvgHelper.createTransform());

        this.renderVisual = SvgHelper.createGroup([["class", "render-visual"]]);
        this.visual.appendChild(this.renderVisual);

        
    }

    

    private drawTo(x: number, y: number) {
        this.path.push([x,y]);
        if(this.path.length != 1){
            this.markerBgLine = SvgHelper.createLine(this.path[this.path.length - 2][0], this.path[this.path.length - 2][1],this.path[ this.path.length - 1][0], this.path[this.path.length - 1][1],
                [["stroke", "transparent"], ["stroke-width", "30"]]);
            this.addToRenderVisual(this.markerBgLine);
            this.markerLine = SvgHelper.createLine(this.path[this.path.length - 2][0], this.path[this.path.length - 2][1], this.path[this.path.length - 1][0], this.path[this.path.length - 1][1]);
            this.addToRenderVisual(this.markerLine);
        }
        
    }

    
    protected adjustPath() {
        if (this.path.length != 1) {
            for(let i = 0;i<this.path.length-1;i++){
                this.markerBgLine = SvgHelper.createLine(this.path[i][0], this.path[i][1], this.path[i+1][0], this.path[i+1][1],
                    [["stroke", "transparent"], ["stroke-width", "30"]]);
                this.addToRenderVisual(this.markerBgLine);
                this.markerLine = SvgHelper.createLine(this.path[i][0], this.path[i][1], this.path[i+1][0], this.path[i+1][1]);
                this.addToRenderVisual(this.markerLine);
            }
        }
    }
}
