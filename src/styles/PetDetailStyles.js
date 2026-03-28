import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F2F6',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 8,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F6',
  },
  label: {
    fontSize: 16,
    color: '#636E72',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#2D3436',
    fontWeight: 'bold',
  },
  favoriteButton: {
    marginTop: 30,
    backgroundColor: '#FFEAA7',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  backButton: {
    marginTop: 15,
  },
  backButtonText: {
    color: '#0984E3',
    fontSize: 16,
  },
});