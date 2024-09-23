
import React from 'react'

interface SessionStorageManagerProps {
  tokenKey: string;
}

function SessionStorageManager({ tokenKey }: SessionStorageManagerProps) {

  const saveToken = (token: string) => {
    try {
      sessionStorage.setItem(tokenKey, token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  const getToken = () => {
    try {
      return sessionStorage.getItem(tokenKey);
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  };

  const removeToken = () => {
    try {
      sessionStorage.removeItem(tokenKey);
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };

  return (
    <div>
      <button onClick={() => saveToken('exampleToken')}>Save Token</button>
      <button onClick={() => console.log('Token:', getToken())}>Get Token</button>
      <button onClick={removeToken}>Remove Token</button>
    </div>
  );
}

export default SessionStorageManager;