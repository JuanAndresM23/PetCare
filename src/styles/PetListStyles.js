import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Un gris muy suave de fondo
  },
  // --- ESTILOS DE LA CABECERA ---
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3, // Sombra suave en Android
    shadowColor: '#000', // Sombra suave en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  greeting: {
    fontSize: 18,
    color: '#636E72',
    fontWeight: '400',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3436',
    marginTop: 2,
  },
  headerIconContainer: {
    backgroundColor: '#E8F5E9', // Verde muy pálido de fondo
    padding: 10,
    borderRadius: 50,
  },
  headerEmoji: {
    fontSize: 30,
  },
  // --- ESTILOS DEL RESUMEN ---
  summaryContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  summaryCard: {
    backgroundColor: '#4CAF50', // Verde vibrante
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  summaryCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  // --- ESTILOS DE LA LISTA ---
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Separa el info del icono de flecha
    // Sombras profesionales
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Ocupa todo el espacio disponible
  },
  emoji: {
    fontSize: 35,
    marginRight: 15,
    textAlign: 'center',
    width: 45, // Ancho fijo para alinear textos
  },
  textContainer: {
    flex: 1, // Permite que el texto se ajuste
  },
  petName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3436',
  },
  petSpecies: {
    fontSize: 13,
    color: '#636E72',
    marginTop: 2,
    textTransform: 'capitalize', // Primera letra mayúscula
  },
});