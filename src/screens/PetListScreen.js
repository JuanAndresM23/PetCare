// External dependencies
import React from 'react';
// 1. Cambiamos la procedencia de SafeAreaView para quitar el warning amarillo
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

// Navigation y otros
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/PetListStyles';

const getSpeciesEmoji = (species) => {
  const emojis = {
    Perro: '🐶',
    Gato: '🐱',
    Pájaro: '🐦',
    Pez: '🐟',
  };
  return emojis[species] || '🐾';
};

const PetListScreen = ({ pets }) => {
  const navigation = useNavigation();

  const handlePetPress = (pet) => {
    navigation.navigate('PetDetail', { pet });
  };

  const renderPetCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePetPress(item)}>
      <View style={styles.cardInfo}>
        <Text style={styles.emoji}>{getSpeciesEmoji(item.species)}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.petName}>{item.name}</Text>
          <Text style={styles.petSpecies}>{item.species} • {item.breed}</Text>
        </View>
      </View>
      <Icon name="chevron-forward-outline" size={20} color="#B2BEC3" />
    </TouchableOpacity>
  );

  return (
    // SafeAreaView ahora viene de react-native-safe-area-context
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hola,</Text>
          <Text style={styles.welcomeTitle}>Tus Mascotas</Text>
        </View>
        <View style={styles.headerIconContainer}>
          <Text style={styles.headerEmoji}>🐾</Text>
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryCount}>{pets.length}</Text>
          <Text style={styles.summaryLabel}>Registradas</Text>
        </View>
      </View>

      <FlatList
        data={pets}
        // 2. Corregimos el error de las Keys duplicadas asegurando que sea un String único
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        renderItem={renderPetCard}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;