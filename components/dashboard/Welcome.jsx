export default function WelcomeSection({ name }) {
  return (
    <div className="p-2">
      <h1 className="text-foreground text-2xl font-semibold">
       مرحباً بك,{name} 👋🏻
      </h1>
    </div>
  );
}
