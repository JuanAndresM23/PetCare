// Dependencias externas
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Navegación
import { useNavigation, useRoute } from '@react-navigation/native';

// Estilos
import styles from '../styles/PetDetailStyles';

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

const PetDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
//agregar favoeito 

  // Recibe y desestructura el objeto de la mascota enviado desde PetListScreen
  const { pet } = route.params;

  // Estado local para el toggle de favorito
  const [isFavorite, setIsFavorite] = useState(false);
  // Estado local para el contador de visitas al perfil
  const [visitCount, setVisitCount] = useState(0);

  // useEffect con dependencia: actualiza el título del header y el contador
  // cada vez que cambia la mascota recibida por parámetros
  useEffect(() => {
    navigation.setOptions({ title: pet.name });
    setVisitCount((prev) => prev + 1);
  }, [pet]);

  // Alterna entre favorito y no favorito
  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        {/* Emoji representativo de la especie */}
        <Text style={styles.emoji}>{getSpeciesEmoji(pet.species)}</Text>
        <Text style={styles.name}>{pet.name}</Text>

        {/* Fila de información: especie */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Especie:</Text>
          <Text style={styles.value}>{pet.species}</Text>
        </View>

        {/* Fila de información: raza */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Raza:</Text>
          <Text style={styles.value}>{pet.breed}</Text>
        </View>

        {/* Fila de información: edad */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Edad:</Text>
          <Text style={styles.value}>{pet.age} años</Text>
        </View>

        {/* Fila de información: peso */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Peso:</Text>
          <Text style={styles.value}>{pet.weight} kg</Text>
        </View>

        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteActive]}
          onPress={handleFavoriteToggle}
        >
          <Text style={styles.favoriteButtonText}>
            {isFavorite ? ' En Favoritos' : '☆ Agregar a Favoritos'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>

        {/* Botón para volver a la pantalla anterior */}
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