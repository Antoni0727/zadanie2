import {Text, View} from "react-native";

const KingsList = (props) =>{

        const {id, name, reignDate} = props.kingsList[0]

        return(
            <Text>Kings List {id} {name} {reignDate}</Text>
        )

}

export default KingsList;