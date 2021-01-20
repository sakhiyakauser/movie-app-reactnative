import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,ScrollView
} from "react-native";
export default class About extends React.Component {
  static navigationOptions = {
    title: 'Movie Info',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor() {
    super();
    this.state = {
      movie: '',
     };
  }
 componentDidMount() {
      this.getMoviesById(this.props.navigation.getParam("id"));
  }
  getMoviesById = (id)=>{
     return fetch(`https://www.omdbapi.com/?apikey=3ade7c9e&i=${id}&plot=full`)
     .then((response) => response.json())
     .then((responseJson) => {
      this.setState({movie: responseJson})
           })
     .catch((error) => {
        console.error(error)
    })  
  } 
render() {
  return (
    <ScrollView styles={styles.container}>
      <View style= {styles.view}>
        <Image style={styles.image}
           source={{uri: this.state.movie.Poster}} />
          <Text style={styles.title}>{this.state.movie.Title}</Text>
          <Text style={styles.year}>Year: {this.state.movie.Year}</Text>
          <Text style={styles.actors}>Actors: {this.state.movie.Actors} </Text>
         <Text style={styles.released}>Released:{this.state.movie.Released} </Text>
         <Text style={styles.genre}>Genre: {this.state.movie.Genre} </Text>
         <Text style={styles.rated}>Rated: {this.state.movie.Rated} </Text>
         <Text style={styles.plot}> Plot: {this.state.movie.Plot} </Text>
        </View>
    </ScrollView>
   )
 }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth:10,
   borderColor: "coral",
    padding: 5
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  image:{
    width: 500, 
    height: 300, 
    marginBottom: 10
  },
  plot: {
    marginTop: 10, 
    fontSize: 20,
    fontWeight: "normal",
    margin: 15
  },
  
  genre: {
    marginTop: 2,
    color: "green",
    fontWeight: "bold",
    fontSize: 20
  },
  year: {
    marginTop: 2,
    color: "green",
    fontWeight: "bold",
    fontSize: 20
  },
  rated: {
    marginTop: 3,
    color: "green", fontSize: 20,
    fontWeight: "bold"

  },
  released: {
    marginTop: 3,
    color: "green", fontSize: 20,
    fontWeight: "bold"

  },
  directed: {
    marginTop: 3,
    color: "green",
    fontSize: 20,
    fontWeight: "bold"

  },
  actors: {
    marginTop: 3,
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
     margin: 5,
     
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    alignItems:"center",
    marginLeft:10,
    justifyContent:"center"
  },
  opacity: {
    backgroundColor: "orange",
    borderRadius: 2,
    padding: 5,
    marginBottom: 10,
    color:'blue'
  },
  touchableText: {
    fontSize: 20,
    color: "white",

  }
});