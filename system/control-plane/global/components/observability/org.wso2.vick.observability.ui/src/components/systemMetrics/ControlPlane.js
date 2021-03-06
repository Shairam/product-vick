/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Paper from "@material-ui/core/Paper";
import React from "react";
import TopToolbar from "../common/toptoolbar";
import {withStyles} from "@material-ui/core/styles";
import * as PropTypes from "prop-types";

const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit * 3,
        margin: theme.spacing.unit
    }
});

const ControlPlane = (props) => (
    <React.Fragment>
        <TopToolbar title={"Control Plane Metrics"}/>
        <Paper className={props.classes.root}>
            Graphs
        </Paper>
    </React.Fragment>
);

ControlPlane.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlPlane);
