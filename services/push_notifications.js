import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    const previousToken = await AsyncStorage.getItem('pushtoken');
    console.log(previousToken);

    if (previousToken) 
        return;
    
    else {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        if (finalStatus !== 'granted')
            return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, { token: { token } });
    AsyncStorage.setItem('pushtoken', token);
}