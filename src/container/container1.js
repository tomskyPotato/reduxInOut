import { connect } from 'react-redux'
import Component1 from '../components/component1'
import { stringAction } from '../actions'

//Hier gehen die daten NACH Link als Props
//Der state wurde vom store an alle seine children durchgereicht
const mapStateToProps = (state, container1Props) => ({
    button1Text: "Button1",
    button2Text: "Button2",
    xxx: container1Props.filter,
    reducer1State: state.Reducer1,
    reducer2State: state.Reducer4[0].name
})

//Hier gehen die Daten an den Store über die action "setVisibilityFilter"
//Die Funktion "dispatch" kommt vom shop Parent von dem auch state kommt
//ownProps sind die Properties von Container1 die als InlineCode beim verwenden
//der Componente definiert werden.
const mapDispatchToProps = {
  onClickButton: stringAction
}

const Container1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component1)

export default Container1