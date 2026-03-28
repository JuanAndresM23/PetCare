// Dependencias externas
import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Navegación
import { useNavigation } from '@react-navigation/native';

// Estilos
import styles from '../styles/PetListStyles';

// Retorna un emoji según la especie de la mascota
const getSpeciesEmoji = (species) => {
  // Normaliza el texto a minúsculas para evitar errores de capitalización
  const normalized = species?.trim().toLowerCase();
  const emojis = {
    perro: '🐶',
    gato: '🐱',
    pajaro: '🐦',
    pájaro: '🐦',
    ave: '🐦',
    pez: '🐟',
    conejo: '🐰',
    hamster: '🐹',
    hámster: '🐹',
    tortuga: '🐢',
    serpiente: '🐍',
    caballo: '🐴',
  };
  // Retorna el emoji correspondiente o una huella si no se reconoce la especie
  return emojis[normalized] || '🐾';
};

// Recibe la lista de mascotas como prop desde AppNavigator
const PetListScreen = ({ pets: propPets }) => {
  const navigation = useNavigation();

  // useState: maneja el arreglo de mascotas como estado local
  const [pets, setPets] = useState([]);

  // useEffect con array vacío: carga los datos iniciales al montar el componente
  useEffect(() => {
    setPets(propPets);
  }, []);

  // useEffect con dependencia: actualiza la lista cuando se registra una nueva mascota
  useEffect(() => {
    setPets(propPets);
  }, [propPets]);

  // Navega a PetDetail enviando el objeto completo de la mascota
  const handlePetPress = (pet) => {
    navigation.navigate('PetDetail', { pet });
  };

  // Renderiza una tarjeta individual por cada mascota
  const renderPetCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePetPress(item)}
      activeOpacity={0.7}
    >
      <Text style={styles.emoji}>{getSpeciesEmoji(item.species)}</Text>
      <View style={styles.cardInfo}>
        <Text style={styles.petName}>{item.name}</Text>
        <Text style={styles.petSpecies}>{item.species} · {item.breed}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  // Renderiza el estado vacío cuando no hay mascotas registradas
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🐾</Text>
      <Text style={styles.emptyText}>Aún no tienes mascotas registradas</Text>
      <Text style={styles.emptySubtext}>Ve a la pestaña "Registrar" para agregar una</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mis Mascotas</Text>
      {/* Lista de mascotas con estado vacío integrado */}
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetCard}
        contentContainerStyle={styles.list}
        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;