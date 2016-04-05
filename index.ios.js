import React, { TouchableHighlight, Text, View, AppRegistry, StyleSheet } from 'react-native';
import App from './src/App';

var PointLook = React.createClass({
    render: function() {
                return <View style={styles.container}>
                    <View style={[styles.header, this.border('yellow')]}>
                        <Text>
                            PointLook
                        </Text>
                        <App />
                    </View>
                </View>
            },
            startStopButton: function() {
                    return (
                            <TouchableHighlight underlayColor='gray'>
                        <Text>
                            Start
                        </Text>
                    </TouchableHighlight>
                    );
            },
    lapButton: function() {
                    return <TouchableHighlight underlayColor='gray'>
                        <Text>
                            Lap
                        </Text>
                    </TouchableHighlight>
            },
    border: function(color) {
                return {
                    borderColor: color,
                    borderWidth: 4

                }
            }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
               },
    header: {
        flex: 1
            },
    footer: {
        flex: 1
            },
    timerWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
                  },
    buttonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
                   }
});

AppRegistry.registerComponent('PointLook', () => PointLook );
