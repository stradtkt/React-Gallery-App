import React, {Component} from 'react';
import { withRouter } from "react-router";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Photos from "./Photos";

class PhotoContainer extends Component {
    render() {
        const {loading, search, items} = this.props.state;
        const url_topic = this.props.match.params.topic;
        let body;
        if(url_topic !== search) {
            if(loading) {
                body = <Loading/>
            } else {
                this.props.fetchData(url_topic);
            }
        } else {
            if(items.length === 0) {
                body = <NotFound search={search}/>
            } else {
                body = (
                    <div>
                        <h2>Your results for {search}</h2>
                        <ul>
                            {items.map((item) => <Photos src={item.src} key={item.id}/>)}
                        </ul>
                    </div>
                )
            }
        }
        return (
            <div className="photo-container">
                {body}
            </div>
        );
    }
}

export default withRouter(PhotoContainer);