import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 15,
    color: '#888',
    fontWeight: '600',
  },
  value: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  favoriteButton: {
    marginTop: 24,
    backgroundColor: '#fff0f0',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: '#ffcccc',
  },
  favoriteButtonText: {
    fontSize: 16,
    color: '#e05c5c',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
  },
  backButtonText: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
});

export default styles;