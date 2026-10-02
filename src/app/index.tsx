import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.course}>{course}</Text>
      <Text style={styles.units}>Units: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

function StudentRoster() {
  const [reversed, setReversed] = useState(false);
  const students = [
    {
      id: "s1",
      name: "Anna Cruz",
      course: "IT313",
      units: 21,
      isFullLoad: true,
    },
    {
      id: "s2",
      name: "Bea Santos",
      course: "IT313",
      units: 15,
      isFullLoad: false,
    },
    {
      id: "s3",
      name: "Cid Ramos",
      course: "IT313",
      units: 18,
      isFullLoad: true,
    },
    {
      id: "s4",
      name: "Dex Alonzo",
      course: "IT313",
      units: 12,
      isFullLoad: false,
    },
  ];

  const displayedStudents = reversed ? [...students].reverse() : students;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.count}>{`${students.length} students`}</Text>

      <Pressable style={styles.button} onPress={() => setReversed(!reversed)}>
        <Text style={styles.buttonText}>Reverse Roster</Text>
      </Pressable>

      {displayedStudents.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  count: {
    fontSize: 16,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },

  name: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
  },

  course: {
    fontSize: 16,
  },

  units: {
    fontSize: 16,
  },

  fullLoad: {
    marginTop: 8,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default function App() {
  return <StudentRoster />;
}
