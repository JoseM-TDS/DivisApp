import { IonAlert, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState("")
  const [alertTitle, setAlertTitle] = useState("")
  const [valueInput, setValueInput] = useState<number>(0)

  const handleChange = (e: CustomEvent) => {
    setValueInput(Number(e.detail.value))
  }

  const handleClick = () => {
    if (isNaN(valueInput)) {
      setAlertMessage("Por favor ingrese un númmero válido")
      setAlertTitle("¡Error!")
    } else {
      setAlertMessage(`Tu monto en $ es: ${(valueInput / 8).toFixed(2)}`)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>DivisAPP 23001327</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <IonCard>
            <IonCardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <IonText color={'dark'}>
                <h1>¡Bienvenido a DivisApp!</h1>
              </IonText>
              <IonInput className='ion-margin-top' onIonChange={handleChange} fill='outline' label='Cantidad' labelPlacement='floating' placeholder='Monto en Q' />
              <IonButton id='action' onClick={handleClick} shape='round' fill='solid' className='ion-margin-top'>Convertir a $</IonButton>
              <IonAlert trigger='action' header={alertTitle} message={alertMessage}></IonAlert>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
