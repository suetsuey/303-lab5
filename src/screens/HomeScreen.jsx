import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  const HomeScreen = () => {
    return (
      <MainLayout>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </MainLayout>
    );
  };
}
export default HomeScreen;
