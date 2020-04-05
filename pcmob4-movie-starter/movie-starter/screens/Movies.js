import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { fetchById } from "../data";
export default class MovieRouteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: null
    };
  }

  //get id params from movieTitle item navigation
  
  }
  //get id results from fetchById
  
  };

  render() {
    return (
      <View style={styles.movieContainer}>
        <TouchableOpacity
          style={styles.touchableOp}
          onPress={() => {
            this.props.navigation.navigate("Search");
          }}
        >
          <Text style={styles.touchableText}>Go Back</Text>
        </TouchableOpacity>
        {this.state.movieInfo && this.state.movieInfo.Poster ? (
          <Image
            resizeMode="cover"
            source={{ uri: this.state.movieInfo.Poster }}
            style={styles.image}
          />
        ) : null}
        {this.state.movieInfo && (
         // insert movie details here
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
 // insert styling code here
 
});
