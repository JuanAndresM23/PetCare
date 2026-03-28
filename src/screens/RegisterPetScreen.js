// Dependencias externas
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Estilos
import styles from '../styles/RegisterPetStyles';

// Recibe la función addPet como prop desde AppNavigator
const RegisterPetScreen = ({ addPet }) => {
  const navigation = useNavigation();

  // Estado independiente para cada campo del formulario
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  // Estado que controla si el botón de registro está habilitado
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect con dependencias: valida el formulario en tiempo real
  // Se ejecuta cada vez que cambia cualquier campo
  useEffect(() => {
    const allFieldsFilled =
      name.trim() !== '' &&
      species.trim() !== '' &&
      breed.trim() !== '' &&
      age.trim() !== '' &&
      weight.trim() !== '';
    setIsFormValid(allFieldsFilled);
  }, [name, species, breed, age, weight]);
 

  // Agrega la mascota a la lista y muestra un resumen con los datos ingresados
  const handleRegister = () => {
    addPet({ name, species, breed, age, weight });
    Alert.alert(
      '¡Mascota Registrada!',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age} años\nPeso: ${weight} kg`,
      [
        {
          text: 'Aceptar',
          // Limpia el formulario al cerrar el Alert
          onPress: () => handleClear(),
        },
      ]
    );
  };

  // Resetea todos los campos del formulario a su valor inicial
  const handleClear = () => {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Evita que el teclado tape los campos en iOS */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Cabecera de la pantalla */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Nueva Mascota</Text>
            <Text style={styles.headerSubtitle}>Completa los datos para el registro</Text>
          </View>

          {/* Sección de datos básicos */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Datos Básicos</Text>

            {/* Campo: nombre de la mascota */}
            <Text style={styles.label}>Nombre de la Mascota</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Ej: Tulio"
                placeholderTextColor="#B2BEC3"
                value={name}
                onChangeText={setName}
              />
            </View>

            {/* Campos en fila: especie y raza */}
            <View style={styles.row}>
              <View style={styles.flex1}>
                {/* Campo: especie */}
                <Text style={styles.label}>Especie</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Ej: Perro"
                    placeholderTextColor="#B2BEC3"
                    value={species}
                    onChangeText={setSpecies}
                  />
                </View>
              </View>
              <View style={styles.width15} />
              <View style={styles.flex1}>
                {/* Campo: raza */}
                <Text style={styles.label}>Raza</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Ej: Labrador"
                    placeholderTextColor="#B2BEC3"
                    value={breed}
                    onChangeText={setBreed}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Sección de datos físicos */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Datos Físicos</Text>

            {/* Campos en fila: edad y peso */}
            <View style={styles.row}>
              <View style={styles.flex1}>
                {/* Campo: edad */}
                <Text style={styles.label}>Edad (años)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Ej: 3"
                    placeholderTextColor="#B2BEC3"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.width15} />
              <View style={styles.flex1}>
                {/* Campo: peso */}
                <Text style={styles.label}>Peso (kg)</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Ej: 25"
                    placeholderTextColor="#B2BEC3"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Botón de registro — deshabilitado si el formulario no es válido */}
          <TouchableOpacity
            style={[styles.registerButton, !isFormValid && styles.disabledButton]}
            onPress={handleRegister}
            disabled={!isFormValid}
          >
            <Text style={styles.registerButtonText}>Registrar Mascota</Text>
          </TouchableOpacity>

          {/* Botón para limpiar todos los campos del formulario */}
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearButtonText}>Limpiar Formulario</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPetScreen;