/* eslint-disable max-len, react/jsx-no-bind */

import React, { Component } from "react"
import Markdown from "react-markdown"
import VisibleSensor from "../Components/VisibleSensor"
import classnames from "classnames"

import commonStyles from "../../../styles/common.scss"
import styles from "./ChapterTitle.scss"

let velocity
if (typeof window !== "undefined") {
  velocity = require("velocity-animate")
}

export default class ChapterTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
    }
    this._handleTitleVisible = this._handleTitleVisible.bind(this)
  }

  _handleTitleVisible() {
    if(!this.state.isPlaying) {
      this.setState({isPlaying: true})
      velocity(this.titleBox, { translateX: [ "0", "0" ], translateY: [ "0%", "15%" ], opacity: [ 1, 0.5 ] }, { delay: 50, duration: 900 })
      .then(() => {
        this.setState({isPlaying: false})
      })
    }
  }

  render() {
    const { chapterId, title } = this.props

    return (
      <div className={ styles["container"] }>
        <VisibleSensor handleVisible={ this._handleTitleVisible }>
          <p className={ styles["title"] }> { "Chapter " + chapterId }</p>
          <div className={ styles["outer"] }>
            <div className={ styles["bg-outer"] }>
              <div className={ classnames(commonStyles["content-outer"], styles["title-box"]) }
                ref={ (ref) => this.titleBox = ref }
              >
                <h2>
                  <Markdown source={ title } />
                </h2>
              </div>
            </div>
          </div>
          <div className={ styles["deco-line-1"] }></div>
          <div className={ styles["deco-line-2"] }></div>
          </VisibleSensor>
      </div>
    )
  }
}

ChapterTitle.propTypes = {
  chapterId: React.PropTypes.string,
  title: React.PropTypes.string,
}
