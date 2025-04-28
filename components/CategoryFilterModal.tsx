import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

const categories = ["Tất cả", "Món chính", "Bữa sáng", "Tráng miệng", "Đồ uống"];

interface CategoryFilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (category: string) => void;
  selectedCategory: string;
}

export default function CategoryFilterModal({
  visible,
  onClose,
  onApply,
  selectedCategory,
}: CategoryFilterModalProps) {
  const [category, setCategory] = useState(selectedCategory || "Tất cả");

  // Đồng bộ state khi mở lại modal
  useEffect(() => {
    setCategory(selectedCategory || "Tất cả");
  }, [selectedCategory, visible]);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Lọc theo loại món</Text>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryBtn,
                category === cat && styles.selectedBtn,
              ]}
              onPress={() => setCategory(cat)}
            >
              <Text style={category === cat ? styles.selectedText : styles.text}>{cat}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.actionRow}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.text}>Đóng</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onApply(category)}>
              <Text style={styles.selectedText}>Lọc</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.2)", justifyContent: "center", alignItems: "center" },
  modal: { backgroundColor: "#fff", borderRadius: 16, padding: 24, width: 300 },
  title: { fontWeight: "bold", fontSize: 18, marginBottom: 16 },
  categoryBtn: { padding: 10, borderRadius: 8, marginBottom: 8, backgroundColor: "#F3F3F3" },
  selectedBtn: { backgroundColor: "#129575" },
  text: { color: "#222", fontSize: 15 },
  selectedText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
  actionRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 16 },
});
