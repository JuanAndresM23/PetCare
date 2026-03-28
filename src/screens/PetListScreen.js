// External dependencies
import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, View } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styles
import styles from '../styles/PetListStyles';

// Returns an emoji based on the pet species
const getSpeciesEmoji = (species) => {
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
  return emojis[normalized] || '🐾';
};

// Receives pets list as prop from AppNavigator
const PetListScreen = ({ pets: propPets }) => {
  const navigation = useNavigation();

  // useState: manages the pets array as local state
  const [pets, setPets] = useState([]);

  // useEffect with empty array: loads initial data when component mounts
  useEffect(() => {
    setPets(propPets);
  }, []);

  // useEffect with dependency: updates list when propPets changes (new pet registered)
  useEffect(() => {
    setPets(propPets);
  }, [propPets]);

  // Navigates to PetDetail passing the full pet object
  const handlePetPress = (pet) => {
    navigation.navigate('PetDetail', { pet });
  };

  // Renders a single pet card
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

  // Empty state when no pets are registered
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