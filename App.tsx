import React, { Component } from "react"; // Importando Component
import params from "./src/params";
import { SafeAreaView, StyleSheet, Text } from "react-native"; // Importando Text

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
  },
  instructions: {
    fontSize: 16,
    color: "#333333",
    marginTop: 10,
    textAlign: "center",
  },
});