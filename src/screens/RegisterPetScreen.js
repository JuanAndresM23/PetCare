import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/RegisterPetStyles';

// RECIBIMOS addPet COMO PROP
const RegisterPetScreen = ({ addPet }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const allFieldsFilled =
      name.trim() !== '' &&
      species.trim() !== '' &&
      breed.trim() !== '' &&
      age.trim() !== '' &&
      weight.trim() !== '';
    setIsFormValid(allFieldsFilled);
  }, [name, species, breed, age, weight]);

  const handleRegister = () => {
    // 1. Creamos el objeto con la nueva mascota
    const newPet = { name, species, breed, age, weight };
    
    // 2. Ejecutamos la función que viene desde App.js
    addPet(newPet);

    // 3. Mostramos éxito y navegamos
    Alert.alert(
      '✅ Mascota Registrada',
      `¡${name} ha sido agregado a la lista!`,
      [
        { 
          text: 'Ir a la lista', 
          onPress: () => {
            handleClear();
            navigation.navigate('Mascotas'); // Salta a la pestaña de la lista
          } 
        }
      ]
    );
  };

  const handleClear = () => {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Registrar Mascota</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Luna"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Especie</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Perro, Gato"
            value={species}
            onChangeText={setSpecies}
          />

          <Text style={styles.label}>Raza</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Labrador"
            value={breed}
            onChangeText={setBreed}
          />

          <Text style={styles.label}>Edad (años)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 3"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 25"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={[styles.registerButton, !isFormValid && styles.disabledButton]}
            onPress={handleRegister}
            disabled={!isFormValid}
          >
            <Text style={styles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearButtonText}>Limpiar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPetScreen;