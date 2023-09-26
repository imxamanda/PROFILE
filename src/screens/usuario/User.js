import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Card } from 'react-native-paper';
import Api from '../../services/Api';

export default function Usuario({route, navigation }) {
  const { userId } = route.params;
  const [usuario, setUsuario] = useState(null);


  useEffect(() => {
    Api.get(`/users/${userId}`)
      .then(response => {
        setUsuario(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId]);


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>
      {usuario && (
        <Card>
          <Card.Content style={{ alignItems: 'center' }}>
            <Card.Cover source={{ uri: usuario.image }} style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 10 }} />
            <Text>ID: {usuario.id}</Text>
            <Text>Primeiro Nome: {usuario.firstName}</Text>
            <Text>Último Nome: {usuario.lastName}</Text>
            <Text>Nome de Solteira: {usuario.maidenName}</Text>
            <Text>Idade: {usuario.age}</Text>
            <Text>Gênero: {usuario.gender}</Text>
            <Text>Email: {usuario.email}</Text>
            <Text>Telefone: {usuario.phone}</Text>
            <Text>Nome de Usuário: {usuario.username}</Text>
            <Text>Data de Nascimento: {usuario.birthDate}</Text>
            <Text>Tipo Sanguíneo: {usuario.bloodGroup}</Text>
            <Text>Altura: {usuario.height} cm</Text>
            <Text>Peso: {usuario.weight} kg</Text>
            <Text>Cidade: {usuario.address.city}</Text>
            <Text>Estado: {usuario.address.state}</Text>
            <Text>Universidade: {usuario.university}</Text>
            <Text>Nome da Empresa: {usuario.company.name}</Text>
            <Text>Departamento da Empresa: {usuario.company.department}</Text>
            <Text>Título na Empresa: {usuario.company.title}</Text>
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
}