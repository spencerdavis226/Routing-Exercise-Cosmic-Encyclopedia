export default function ContentPage({ category }) {
  const content = {
    planets:
      'Planets are celestial bodies orbiting a star, including Earth, Mars, and Jupiter.',
    stars:
      'Stars are massive, luminous spheres of plasma held together by gravity, like our Sun.',
    nebulae:
      'Nebulae are vast clouds of gas and dust in space, often forming new stars.',
    galaxies:
      'Galaxies are enormous systems of stars, planets, and dark matter, like the Milky Way.',
  };

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <p>{content[category] || 'No information available.'}</p>
    </div>
  );
}
