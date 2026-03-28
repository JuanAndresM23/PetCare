import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contenedor principal de la pantalla
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  // Título principal de la pantalla
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  // Contenedor del contenido de la lista
  list: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  // Tarjeta individual de cada mascota
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  // Contenedor de la información textual de la mascota
  cardInfo: {
    flex: 1,
  },
  // Nombre de la mascota en la tarjeta
  petName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 3,
  },
  // Especie y raza de la mascota en la tarjeta
  petSpecies: {
    fontSize: 13,
    color: '#AAA',
  },
  // Flecha indicadora de navegación al detalle
  chevron: {
    fontSize: 22,
    color: '#DDD',
    marginLeft: 8,
  },
  // Contenedor del estado vacío cuando no hay mascotas
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  // Texto principal del estado vacío
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    textAlign: 'center',
  },
  // Texto secundario del estado vacío
  emptySubtext: {
    fontSize: 13,
    color: '#BBB',
    textAlign: 'center',
    marginTop: 6,
  },
  // Emoji representativo de la especie en la tarjeta
  emoji: {
    fontSize: 28,
    marginRight: 14,
  },
});

export default styles;