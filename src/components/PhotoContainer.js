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
        // if the url_topic does not equal search
        if(url_topic !== search) {
            // if the condition is set to loading
            if(loading) {
                //the body will show the loader
                body = <Loading/>
            } else {
                //fetch the data from the url_topic that is passed in
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
                            {/*Loop through all the items in the search and display them*/}
                            {items.map((item) => <Photos src={item.src} key={item.id}/>)}
                        </ul>
                    </div>
                )
            }
        }
        return (
            <div className="photo-container">
                {/*Show all the items in the body*/}
                {body}
            </div>
        );
    }
}

export default withRouter(PhotoContainer);
