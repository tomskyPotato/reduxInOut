import { connect } from 'react-redux'
import Component2 from '../components/component2'
import { getUserName } from '../actions'

const mapStateToProps = (state, container1Props) => ({
    name: state.Reducer4.map(user => 
            (user.active === true)
              ? user.name
              : null
            ),
    reducer2State: state.Reducer4[0].name
})

const mapDispatchToProps = {
  onClickButton: getUserName
}

const Container2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component2)

export default Container2