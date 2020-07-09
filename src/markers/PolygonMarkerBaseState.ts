import { MarkerBaseState } from "./MarkerBaseState";

export interface PolygonMarkerBaseState extends MarkerBaseState {
    path:number[][],
    rect: boolean,
    markerType: string;
}