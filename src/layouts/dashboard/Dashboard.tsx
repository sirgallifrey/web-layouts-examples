import React from "react";
import "./Dashboard.css";
import { SideMenu } from "../../features/sideMenu/SideMenu";
import { Switch, Route } from "react-router-dom";
import { FlexBasic } from "../../pages/flexBasic/FlexBasic";
import { FlexGrowOne } from "../../pages/flexGrowOne/FlexGrowOne";
import { FlexGrowAll } from "../../pages/flexGrowAll/FlexGrowAll";
import { FlexGrowDifferent } from "../../pages/flexGrowDifferent/FlexGrowDifferent";
import { FlexShrink } from "../../pages/flexShrink/FlexShrink";
import { FlexWrap } from "../../pages/flexWrap/FlexWrap";

export interface DashboardLayoutProps {
  children?: React.ReactNodeArray;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="layouts-dashboard__grid">
      <div style={{ backgroundColor: "#397ee0", gridArea: "header" }} >
        <p style={{textAlign:"center"}}> Header </p>
      </div>
      <SideMenu />
      <div style={{ gridArea: "content", padding: "30px" }}>
        <Switch>
          <Route path="/flexbasic" component={FlexBasic} />
          <Route path="/flexgrowone" component={FlexGrowOne} />
          <Route path="/flexgrowall" component={FlexGrowAll} />
          <Route path="/flexgrowdiff" component={FlexGrowDifferent} />
          <Route path="/flexshrink" component={FlexShrink} />
          <Route path="/flexwrap" component={FlexWrap} />

        </Switch>
      </div>
      <div style={{ backgroundColor: "grey", gridArea: "footer", paddingLeft: "15px"}}>
        <p>My footer Text</p>
      </div>
    </div>
  );
}
