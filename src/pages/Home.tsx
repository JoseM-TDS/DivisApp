import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DivisAPP 23001327</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonText>¡Bienvenido a DivisApp!</IonText>
            <IonInput className='ion-margin-top' fill='outline' label='Cantidad' labelPlacement='floating' placeholder='Monto en Q' />
            <IonButton shape='round' fill='solid' className='ion-margin-top'>Convertir a $</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
