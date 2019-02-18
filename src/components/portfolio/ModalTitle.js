import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';

import '../../css/Portfolio.css';

class ModalTitle extends Component {
    constructor(props) {
        super(props);
        this.state = { isVideoLoaded: false, progressState: null };
        this.handleOnVideoProgress = this.handleOnVideoProgress.bind(this);
        this.handleOnVideoReady = this.handleOnVideoReady.bind(this);
    }
    
    handleOnVideoProgress(state) {
        const stateObj = this.state;
        stateObj.progressState = state;
        this.setState(stateObj);
    }

    handleOnVideoReady(e) {
        const stateObj = this.state;
        stateObj.isVideoLoaded = true;
        this.setState(stateObj);
    }

    generateMediaJSX(mediaTable) {
        this.mediaJSX = [];
        
        mediaTable.forEach(media => {
            let jsx = null;
            if (media.type === "video") {
                jsx = 
                <div className="modal-title-media">
                    {!this.state.isVideoLoaded? 
                            <div className="modal-media-loading">loading video...</div> :
                            <div className="modal-media-loading exit">loading video...</div> }
                    <ReactPlayer
                    width='100%'
                    height='100%'
                    onProgress={this.handleOnVideoProgress}
                    onReady={this.handleOnVideoReady}
                    light={false}
                    url={media.src} />
                </div>
            }
            else if (media.type === "image") {
                jsx = <img alt="work-img" src={media.src}/>;
            }

            this.mediaJSX.push(jsx);
        });
    }

    render() {
        this.generateMediaJSX(this.props.mediaTable);
        return (
            <div>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <div>{this.mediaJSX}</div>
                    </Grid>
                    <Grid item>
                        <div>{this.mediaJSX}</div>
                    </Grid>
                    <Grid item>
                        <div>{this.mediaJSX}</div>
                    </Grid>
                </Grid>
                <Grid item>
                    <div className="work-title">{this.props.title}</div>
                    <div className="work-title">{this.props.type}</div>
                    <div className="work-title">{this.props.date}</div>
                    <div className="work-title">{this.props.team}</div>
                </Grid>
            </div>
        );
    }
}

ModalTitle.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    mediaTable: PropTypes.array.isRequired,
};

export default ModalTitle;