import { connect } from 'react-redux'
import Component1 from '../components/component1'

//Hier gehen die daten NACH Link als Props
//Der state wurde vom store an alle seine children durchgereicht
const mapStateToProps = (state, container1Props) => ({
    button1Text: "Button1",
    button2Text: "Button2",
    xxx: container1Props.filter,
    reducer1State: state.exampleReducer1,
    reducer2State: state.exampleReducer2
})

//Hier gehen die Daten an den Store über die action "setVisibilityFilter"
//Die Funktion "dispatch" kommt vom shop Parent von dem auch state kommt
//ownProps sind die Properties von Container1 die als InlineCode beim verwenden
//der Componente definiert werden.
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickButton1: () => {
    dispatch({
    type: 'ACTION_FILTER_1',
    filter: "actionText1"
    })
  },
  onClickButton2: () => {
    dispatch({
    type: 'ACTION_FILTER_2',
    filter: "actionText2"
    })
  }
})

const Container1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component1)

export default Container1