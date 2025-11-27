import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,                      
    padding: 20,                  
    backgroundColor: '#EAF6FF',   
  },

  titulo: {
    fontSize: 24,                
    fontWeight: 'bold',          
    marginBottom: 20,            
    color: '#003049',            
  },

  input: {
    borderWidth: 1,               
    borderColor: '#B0C4DE',      
    borderRadius: 8,              
    padding: 10,                  
    backgroundColor: '#fff',     
    marginBottom: 10,             
  },

  botao: {
    backgroundColor: '#0077B6',   
    padding: 15,                   
    borderRadius: 8,               
    alignItems: 'center',          
    marginBottom: 20,             
  },

  textoBotao: {
    color: '#fff',                 
    fontWeight: 'bold',           
    fontSize: 16,                
  },

  item: {
    fontSize: 18,                  
    color: '#1D3557',              
    paddingVertical: 6,            
  },
});
