import React from "react";
import {
  TouchableHighlight,
  FlatList,
  View,
  TextInput,
  Text,
  StyleSheet
} from "react-native";
import { fetchMovies } from "../data";

export default class MainRouteComponent extends React.Component {
  // insert code here
  }

  //update search text
  componentDidUpdate(prevState) {
   

  }
  //get search results from fetchMovies
  getSearch = async text => {
   
  };

  //movie title items to render in flatlist
  movieTitle = ({ item }) => {
    

  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.textArea}>
          <TextInput
            style={styles.textInput}
            placeholder="Search Movie Name"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <FlatList
          style={styles.flatList}
          data={this.state.movies}
          renderItem={this.movieTitle}
          keyExtractor={item => item.Title + item.imdbID}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
 // insert styling code here

});
