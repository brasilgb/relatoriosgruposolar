import React, { Fragment, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment, { now } from 'moment';
import { AuthContext } from '../../contexts/auth';
import { Data } from 'victory-core';

export default function Calendar({ color }) {

  const { setDataFiltro, dataFiltro} = useContext(AuthContext);
  const [date, setDate] = useState(new Date(now()));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setDataFiltro(currentDate)
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Fragment>
      <View>
        <Icon onPress={showDatepicker}  name="calendar" size={25} color={color ? color : '#333'} style={styles.icon} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="calendar"
            onChange={onChange}
            locale="pt-br"
          />
        )}
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    // position: 'absolute',
    // right: 10
  }
})