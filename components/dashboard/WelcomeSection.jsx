export default function WelcomeSection({ name }) {
  return (
    <div className="p-2">
      <h1 className="text-foreground text-2xl font-semibold">
        Welcome Back, {name} 👋🏻
      </h1>
    </div>
  );
}
