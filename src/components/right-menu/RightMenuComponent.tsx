import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {AccountCircle, Home, SettingsPower} from "@material-ui/icons";
import history from "../../history";
import './RightMenuComponent.css'
import {userService} from "../../services/UserService";
import {restService} from "../../services/RestService";

export interface RightMenuComponentProperties {
    role: string;
}

export interface RightMenuComponentState {
}

export class RightMenuComponent extends Component<RightMenuComponentProperties, RightMenuComponentState> {

    render() {
        return (
            <div>
                <Button className={"button-turnoff"}
                        onClick={()=>{
                            restService.removeJWT();
                            history.push('/');
                        }}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-profile"} onClick={()=>history.push(`/${this.props.role}/profile`)}>
                    <AccountCircle className={"white-icon"}/>
                </Button>
                <Button className={"button-home"} onClick={()=>history.push(`/${this.props.role}/home`)}>
                    <Home className={"white-icon"}/>
                </Button>
            </div>
        );
    }
}

