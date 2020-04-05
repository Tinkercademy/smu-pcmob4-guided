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
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      movies: null
    };
  }
  //update search text
  componentDidUpdate(prevState) {
    if (this.state.text !== prevState.text) {
      this.getSearch(this.state.text);
    }
  }
  //get search results from fetchMovies
  getSearch = async text => {
    const results = await fetchMovies(text);
    this.setState({ movies: results });
  };

  //movie title items to render in flatlist
  movieTitle = ({ item }) => {
    return (
      <TouchableHighlight
        style={styles.highlight}
        underlayColor="white"
        onPress={() => {
          this.props.navigation.navigate("Movie", {
            title: item.title,
            id: item.imdbID
          });
        }}
      >
        <View>
          <Text style={styles.title}>{item.Title}</Text>
        </View>
      </TouchableHighlight>
    );
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
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  movieContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "orange"
  },
  textArea: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 70,
    marginBottom: 50
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    width: 250,
    padding: 15,
    fontSize: 16
  },
  flatList: {
    marginTop: 10,
    fontSize: 30,
    backgroundColor: "white"
  },
  highlight: {
    backgroundColor: "teal",
    padding: 5,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});
