import SocialHandles from "../components/SocialHandles";

export default function Support() {
  return (
    <main className="text-center bg-gray-900 text-white m-20 p-10">
      <h1 className="text-3xl font-bold mb-6">Need Help? Get in Touch!</h1>
      
      <p className="mb-4">If you encounter any issues, feel free to:</p>
      
      <ul className="text-lg mb-6">
        <li>Contact me directly through any of the following social media channels:</li>
      </ul>

      <SocialHandles classes="justify-center mb-6" />
      
      <p className="text-lg">I'm always happy to help!</p>
    </main>
  );
}
