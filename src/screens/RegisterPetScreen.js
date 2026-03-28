// External dependencies
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos iconos
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

  // Estados para saber qué input está enfocado (para el estilo)
  const [focusedInput, setFocusedInput] = useState(null);

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
    const newPet = { name, species, breed, age, weight };
    addPet(newPet);

    Alert.alert(
      '✅ ¡Mascota Registrada!',
      `${name} ya es parte de la familia PetCare.`,
      [
        { 
          text: 'Ver en la lista', 
          onPress: () => {
            handleClear();
            navigation.navigate('Mascotas');
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

  // Función auxiliar para renderizar los inputs con estilo de foco
  const renderInput = (placeholder, value, onChangeText, iconName, keyboardType = 'default', inputKey) => (
    <View style={[styles.inputContainer, focusedInput === inputKey && styles.inputContainerFocused]}>
      <Icon name={iconName} size={20} color={focusedInput === inputKey ? '#4CAF50' : '#B2BEC3'} style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#B2BEC3"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onFocus={() => setFocusedInput(inputKey)}
        onBlur={() => setFocusedInput(null)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* === NUEVA CABECERA DE REGISTRO === */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Nueva Mascota</Text>
          <Text style={styles.headerSubtitle}>Completa los datos para el registro</Text>
        </View>
        <View style={styles.headerIconContainer}>
          <Icon name="add-circle" size={35} color="#4CAF50" />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Ajuste para el header
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* === SECCIÓN 1: DATOS BÁSICOS === */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Datos Básicos</Text>
            
            <Text style={styles.label}>Nombre de la Mascota</Text>
            {renderInput("Ej: Luna, Fido...", name, setName, "paw-outline", "default", "name")}

            <View style={styles.row}>
              <View style={styles.flex1}>
                <Text style={styles.label}>Especie</Text>
                {renderInput("Ej: Perro", species, setSpecies, "help-circle-outline", "default", "species")}
              </View>
              <View style={styles.width15} />
              <View style={styles.flex1}>
                <Text style={styles.label}>Raza</Text>
                {renderInput("Ej: Labrador", breed, setBreed, "git-branch-outline", "default", "breed")}
              </View>
            </View>
          </View>

          {/* === SECCIÓN 2: DATOS FÍSICOS === */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Datos Físicos</Text>
            
            <View style={styles.row}>
              <View style={styles.flex1}>
                <Text style={styles.label}>Edad (años)</Text>
                {renderInput("Ej: 3", age, setAge, "calendar-outline", "numeric", "age")}
              </View>
              <View style={styles.width15} />
              <View style={styles.flex1}>
                <Text style={styles.label}>Peso (kg)</Text>
                {renderInput("Ej: 25", weight, setWeight, "barbell-outline", "numeric", "weight")}
              </View>
            </View>
          </View>

          {/* === BOTONES === */}
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