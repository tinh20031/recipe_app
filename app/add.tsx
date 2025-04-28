import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { addRecipe } from "../services/recipes";
import { useRouter } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import { Picker } from "@react-native-picker/picker";

export const options = {
  headerShown: false,
};

export default function AddRecipeScreen() {
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [title, setTitle] = useState("");
  const [serving, setServing] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("https://images.unsplash.com/photo-1504674900247-0877df9cc836");

  const handleAddIngredient = () => setIngredients([...ingredients, ""]);
  const handleChangeIngredient = (text: string, idx: number) => {
    const newArr = [...ingredients];
    newArr[idx] = text;
    setIngredients(newArr);
  };
  const handleRemoveIngredient = (idx: number) => {
    const newArr = ingredients.filter((_, i) => i !== idx);
    setIngredients(newArr);
  };

  const handleAddStep = () => setSteps([...steps, ""]);
  const handleChangeStep = (text: string, idx: number) => {
    const newArr = [...steps];
    newArr[idx] = text;
    setSteps(newArr);
  };
  const handleRemoveStep = (idx: number) => {
    const newArr = steps.filter((_, i) => i !== idx);
    setSteps(newArr);
  };

  const router = useRouter();

  // Hàm chọn ảnh
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    try {
      // Validate dữ liệu
      if (!title || !category || ingredients.length === 0 || steps.length === 0) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
      }

      // Tạo object recipe mới
      const newRecipe = {
        title,
        category,
        ingredients: ingredients.filter(i => i.trim() !== ""),
        instructions: steps.filter(s => s.trim() !== ""),
        image
      };

      // Thêm recipe mới
      await addRecipe(newRecipe);
      router.back(); // Quay lại trang trước
    } catch (error) {
      alert("Có lỗi xảy ra khi lưu thực đơn!");
      console.error(error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome name="close" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>thêm món ăn</Text>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Lưu Thực Đơn</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={{width: '100%'}} onPress={pickImage}>
            <Image
              source={{ uri: image }}
              style={styles.foodImage}
            />
            <View style={styles.cameraOverlay}>
              <FontAwesome name="camera" size={20} color="#fff" />
              <Text style={styles.cameraText}>Chọn hình đại diện món ăn</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.formSection}>
          <TextInput
            style={styles.input}
            placeholder="Tên món:"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Khẩu phần"
            value={serving}
            onChangeText={setServing}
          />
          <TextInput
            style={styles.input}
            placeholder="Thời gian"
            value={time}
            onChangeText={setTime}
          />
          <View style={{ marginBottom: 10 }}>
            <Text style={{ marginBottom: 6, fontWeight: "500", color: "#222" }}>
              Loại món
            </Text>
            <View
              style={{
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#E0E0E0",
                overflow: "hidden",
              }}
            >
              <Picker
                selectedValue={category}
                onValueChange={(itemValue: string) => setCategory(itemValue)}
                style={{ height: 48 }}
                dropdownIconColor="#129575"
              >
                <Picker.Item label="Chọn loại món" value="" />
                <Picker.Item label="Món chính" value="Món chính" />
                <Picker.Item label="Bữa sáng" value="Bữa sáng" />
                <Picker.Item label="Tráng miệng" value="Tráng miệng" />
                <Picker.Item label="Đồ uống" value="Đồ uống" />
              </Picker>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Nguyên Liệu</Text>
        {ingredients.map((item, idx) => (
          <View key={idx} style={styles.rowInput}>
            <TextInput
              style={styles.input}
              placeholder="Nhập nguyên liệu"
              value={item}
              onChangeText={(text) => handleChangeIngredient(text, idx)}
            />
            <TouchableOpacity onPress={() => handleRemoveIngredient(idx)}>
              <FontAwesome name="trash" size={20} color="#FF6464" />
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.addRowBtn} onPress={handleAddIngredient}>
          <FontAwesome name="plus" size={18} color="#129575" />
          <Text style={styles.addRowText}>Thêm Nguyên Liệu</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Cách làm</Text>
        {steps.map((item, idx) => (
          <View key={idx} style={styles.rowInput}>
            <Text style={styles.stepNumber}>{idx + 1}</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập bước làm"
              value={item}
              onChangeText={(text) => handleChangeStep(text, idx)}
            />
            <TouchableOpacity onPress={() => handleRemoveStep(idx)}>
              <FontAwesome name="trash" size={20} color="#FF6464" />
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.addRowBtn} onPress={handleAddStep}>
          <FontAwesome name="plus" size={18} color="#129575" />
          <Text style={styles.addRowText}>Thêm Bước</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
    textTransform: "lowercase",
  },
  saveButton: {
    backgroundColor: "#129575",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
    position: "relative",
  },
  foodImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },
  cameraOverlay: {
    position: "absolute",
    bottom: 8,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(18,149,117,0.8)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  cameraText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 13,
  },
  formSection: {
    marginBottom: 18,
  },
  input: {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "#000",
  },
  rowInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  addRowBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  addRowText: {
    color: "#129575",
    fontWeight: "500",
    marginLeft: 6,
    fontSize: 15,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#F3F3F3",
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: 8,
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
    lineHeight: 24,
  },
}); 