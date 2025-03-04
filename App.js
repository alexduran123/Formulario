/*

TÍTULO DE LA ACTIVIDAD: Formulario con formik.

ALUMNO: Duran Gordillo Alejandro.

MATRÍCULA: 5123180022.

CARRERA: IDGS.



*/

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import BasicForm from './components/BasicForm';
import * as Yup from 'yup';

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre obligatorio')
    .min(3, 'Nombre muy corto'),
  apellido: Yup.string()
    .required('Apellido obligatorio')
    .min(3, 'Apellido muy corto'),
  numero: Yup.string()
    .required('Número obligatorio')
    .min(8, 'Número muy corto'),
});

export default function App() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', apellido: '', numero: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log('Datos enviados:', values)}
      >
        {(props) => <BasicForm {...props} />}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
