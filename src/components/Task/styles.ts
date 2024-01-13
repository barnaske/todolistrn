import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskBody: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#262626',
  },
  taskDone: {
    width: 235,
    height: 40,
    color: '#808080',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    textDecorationLine: 'line-through',
  },
  taskNotDone: {
    width: 235,
    height: 40,
    color: '#F2F2F2',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
})