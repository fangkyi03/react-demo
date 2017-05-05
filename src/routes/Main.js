import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

const Main = ({
  main,
  dispatch,
}) => {
  return (
    <div>
      恭喜你进入下一关
    </div>
  )
}

Main.propTypes = {
  main: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ main }) => ({ main }))(Main)
