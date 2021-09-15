import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

export const createAndSavePDF = async (html) => {
    try {
      const { uri } = await Print.printToFileAsync({ html });
    await Sharing.shareAsync(uri);
    } catch (error) {
      console.error(error);
    }
  };