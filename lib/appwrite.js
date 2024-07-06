import { Client } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.home.aora',
    projectId: '6685a7e1000bccffc394',
    databaseId: '6685a90d000df522c5af',
    userCollectionId: '6685a93b00341843e18c',
    videoCollectionId: '6685a96200289b836c2a',
    storageId: "66897c8b00044cf4fb6b"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;