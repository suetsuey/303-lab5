import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  const AboutScreen = () => {
    return (
      <MainLayout>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </MainLayout>
    );
  };
}
export default AboutScreen;
