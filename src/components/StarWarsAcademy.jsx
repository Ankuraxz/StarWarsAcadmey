// src/components/StarWarsAcademy.jsx
import React from 'react';
import { Container, Text, Center, Space, Image, createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import qrCodeImage from '../assets/fi4qad-hd.png'; // Replace with your actual QR code image path

const useStyles = createStyles((theme) => ({
  header: {
    fontSize: 36,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.gray[1],
  },
  qrCode: {
    width: 150,
    height: 150,
    cursor: 'pointer',
    marginTop: theme.spacing.xl,
  },
  animationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.xl,
  }
}));

const StarWarsAcademy = () => {
  const { classes } = useStyles();

  return (
    <Container>
      <motion.div
        className={classes.animationWrapper}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Text className={classes.header}>Star Wars Academy</Text>
      </motion.div>
    <Center>
        <Text className={classes.subheading}>Click or Scan QR to Start</Text>
    </Center>


      <Center>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={qrCodeImage}
            alt="Scan to visit bot"
            className={classes.qrCode}
            onClick={() => window.open('https://t.me/star_wars_galatic_teacher_bot', '_blank')}
            style={{ width: 500, height: 500 }}

          />
        </motion.div>
      </Center>

      <Space h="xl" />

      <footer className={classes.footer}>
        <Text>Made with ❤️ by Devs from Star Wars Academy ✨</Text>
      </footer>
    </Container>
  );
};

export default StarWarsAcademy;
