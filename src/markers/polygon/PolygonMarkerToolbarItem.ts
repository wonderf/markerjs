import { ToolbarItem } from "../../toolbar/ToolbarItem";
import { PolygonMarker } from "./PolygonMarker";

import Icon from "./line-marker-toolbar-icon.svg";

export class PolygonMarkerToolbarItem implements ToolbarItem {
    public name = "line-marker";
    public tooltipText = "Line";

    public icon = Icon;
    public markerType = PolygonMarker;
}