// External dependencies
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
import Icon from 'react-native-vector-icons/Ionicons';

// Styles
import styles from '../styles/RegisterPetStyles';

const RegisterPetScreen = ({ addPet }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form in real time when any field changes
  useEffect(() => {
    const allFieldsFilled =
      name.trim() !== '' &&
      species.trim() !== '' &&
      breed.trim() !== '' &&
      age.trim() !== '' &&
      weight.trim() !== '';
    setIsFormValid(allFieldsFilled);
  }, [name, species, breed, age, weight]);

  // Shows a summary alert with the registered pet data
const handleRegister = () => {
  addPet({ name, species, breed, age, weight });
  Alert.alert(
    '✅ ¡Mascota Registrada!',
    `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age} años\nPeso: ${weight} kg`,
    [
      {
        text: 'Aceptar',
        onPress: () => handleClear(),
      },
    ]
  );
};

  // Resets all form fields to their initial values
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
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Nueva Mascota</Text>
            <Text style={styles.headerSubtitle}>Completa los datos para el registro</Text>
          </View>

          {/* Basic data section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Datos Básicos</Text>

            <Text style={styles.label}>Nombre de la Mascota</Text>
            <View style={styles.inputContainer}>
              <Icon name="paw-outline" size={20} color="#B2BEC3" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Ej: Tulio"
                placeholderTextColor="#B2BEC3"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.row}>
              <View style={styles.flex1}>
                <Text style={styles.label}>Especie</Text>
                <View style={styles.inputContainer}>
                  <Icon name="help-circle-outline" size={20} color="#B2BEC3" style={styles.inputIcon} />
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
                <Text style={styles.label}>Raza</Text>
                <View style={styles.inputContainer}>
                  <Icon name="git-branch-outline" size={20} color="#B2BEC3" style={styles.inputIcon} />
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

          {/* Physical data section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Datos Físicos</Text>

            <View style={styles.row}>
              <View style={styles.flex1}>
                <Text style={styles.label}>Edad (años)</Text>
                <View style={styles.inputContainer}>
                  <Icon name="calendar-outline" size={20} color="#B2BEC3" style={styles.inputIcon} />
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
                <Text style={styles.label}>Peso (kg)</Text>
                <View style={styles.inputContainer}>
                  <Icon name="barbell-outline" size={20} color="#B2BEC3" style={styles.inputIcon} />
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

          {/* Action buttons */}
          <TouchableOpacity
            style={[styles.registerButton, !isFormValid && styles.disabledButton]}
            onPress={handleRegister}
            disabled={!isFormValid}
          >
            <Icon name="save-outline" size={20} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.registerButtonText}>Registrar Mascota</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Icon name="trash-outline" size={18} color="#FF7675" style={styles.buttonIcon} />
            <Text style={styles.clearButtonText}>Limpiar Formulario</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPetScreen;