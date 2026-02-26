import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Primevideologo from "@/assets/images/prime_video.png";
import AmazonLogo from "@/assets/images/amazon_logo.png";
import CategoryText from "./components/categoryText";


export default function Home(){
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={Primevideologo} style={style.primeLogo}/>
                <Image source={AmazonLogo} style={style.amazonLogo}/>

            </View>
            <View style={style.menu}>
                <TouchableOpacity>
                    <CategoryText text="Home"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CategoryText text="Tv Show"/>

                </TouchableOpacity>
                <TouchableOpacity>
                    <CategoryText text="Sports"/>

                </TouchableOpacity>

            </View>
            <ScrollView style={style.body}>

            </ScrollView>

        </View>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#232f3E",
        flex: 1,
        alignItems: "flex-start"
    },
    menu:{
        width:"100%",
        justifyContent: "space-evenly",
        margin: 30,
        flexDirection:"row"
    },
    body:{
        width:"100%"

    },
    header: {
        width:"100%",
        alignItems: "center",
        justifyContent: "center"
        
    },
    primeLogo: {
        marginTop: 30,
},
    amazonLogo:{
        marginTop:-40,
        marginLeft:40 
    },
});