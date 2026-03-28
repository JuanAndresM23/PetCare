import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/PetDetailStyles';

const PetDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { pet } = route.params;

  const [isFavorite, setIsFavorite] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  // Update header title and visit counter when pet changes
  useEffect(() => {
    navigation.setOptions({ title: pet.name });
    setVisitCount((prev) => prev + 1);
  }, [pet]);

  // Toggles the favorite state
  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.emoji}>{getSpeciesEmoji(pet.species)}</Text>
        <Text style={styles.name}>{pet.name}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Especie:</Text>
          <Text style={styles.value}>{pet.species}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Raza:</Text>
          <Text style={styles.value}>{pet.breed}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Edad:</Text>
          <Text style={styles.value}>{pet.age} años</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Peso:</Text>
          <Text style={styles.value}>{pet.weight} kg</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Visitas a este perfil:</Text>
          <Text style={styles.value}>{visitCount}</Text>
        </View>

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleFavoriteToggle}
        >
          <Text style={styles.favoriteButtonText}>
            {isFavorite ? '❤️ Favorito' : '🤍 Agregar a favoritos'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default PetDetailScreen;