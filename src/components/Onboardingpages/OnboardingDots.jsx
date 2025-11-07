// OnboardingDots.jsx
export default function OnboardingDots({ current }) {
  const total = 3;

  return (
    <div className="dots">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`dot ${i + 1 === current ? "active" : ""}`}
        ></span>
      ))}
    </div>
  );
}
