import React from "react";
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col} from "react-native-table-component";


const CONTENT = {
    tableHead: ['', 'VAULT', 'BARS', 'BEAM', 'FLOOR', 'AA'],
    tableTitle: ['Score', 'Place'],
    tableData: [
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ],
};


const ScoreTable = () => {


    return(
        <View>
            <Table borderStyle={{borderWidth: 1}}>
                <Row 
                    data={CONTENT.tableHead}
                    flexArr={[1, 1, 1, 1, 1, 1]}
                    style={styles.head}
                    textStyle={styles.text}
                />
                <TableWrapper style={styles.wrapper}>
                <Col
                    data={CONTENT.tableTitle}
                    style={styles.title}
                    heightArr={[28, 28]}
                    textStyle={styles.text}
                />
                <Rows
                    data={CONTENT.tableData}
                    flexArr={[1, 1, 1, 1, 1, 1]}
                    style={styles.row}
                    textStyle={styles.text}
                />
                </TableWrapper>
            </Table>
        </View>
    )
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: {
     height: 40, backgroundColor: 'orange' },
  wrapper: { 
    flexDirection: 'row' },
  title: { 
    flex: 1, backgroundColor: '#2ecc71' },
  row: { 
    height: 28 },
  text: { 
    textAlign: 'center',  },
});

export default ScoreTable;