import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    formWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    newTaskForm: {
        flexDirection: 'row',
        width: 327,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    tasksWrapper: {
        alignItems: 'center',
        justifyContent: 'center',        
    },
    tasksContainer: {
        marginTop: 33,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        width: 327,
    },
    tasksCounter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignSelf: 'stretch'
    },
    emptyTaskList: {
        paddingVertical: 48,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        alignSelf: 'stretch',
        borderColor: '#333',
        borderTopWidth: 1,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#808080'
    },
    createdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    createdText: {
        color: '#4EA8DE',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    createdCounter: {
        width: 25,
        height: 19,
        paddingHorizontal: 8,
        paddingVertical: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 999,
        backgroundColor: '#333',
    },
    createdCountText: {
        color: '#D9D9D9',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700'
    },
    doneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    doneText: {
        color: '#8284FA',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    doneCounter: {
        width: 25,
        height: 19,
        paddingHorizontal: 8,
        paddingVertical: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 999,
        backgroundColor: '#333',
    },
    doneCountText: {
        color: '#D9D9D9',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700'
    }    
})