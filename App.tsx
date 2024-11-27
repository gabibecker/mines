import React, { Component } from "react"; // Importando Component
import params from "./src/params";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native"; // Importando Text
import MineField from "./src/components/MineField";
import Header from "./src/components/Header";
import LevelSelection from "./src/screens/LevelSelection";
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './src/functions'

export default class App extends Component {

  constructor(props: {}) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel )
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row,column) => {
    const board = cloneBoard(this.state.board)
    openField(board,row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeu', 'Você perdeu o jogo.')
    }
    
    if(won) {
      Alert.alert('Parabéns', 'Você venceu!')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)
    if(won) {
      Alert.alert('Parabéns', 'Você venceu!')
    }
    this.setState({board, won })
  }

  onLevelSelect = level => {
    params.difficultLevel = level
    this.setState(this.createState)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection}
          onCancel={() => this.setState({ showLevelSelection: false})}
          onLevelSelected={this.onLevelSelect}
        ></LevelSelection>
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
        onNewGame={() => this.setState(this.createState)}
        onFlagPress={() => this.setState({showLevelSelection: true})}/>
        <View style={styles.board}>
          <MineField board={this.state.board} 
          onOpenField={this.onOpenField}
          onSelectField={this.onSelectField} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: '#AAA',
  }
});