import { StyleSheet, Image, ImageSourcePropType } from "react-native";

type Props = {
  placeholderImageSource: ImageSourcePropType | undefined;
};

export default function ImageViewer({ placeholderImageSource }: Props) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
