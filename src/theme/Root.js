import React from 'react';
import Root from '@theme-original/Root';

function StaticStarfield() {
  // Static positions for stars across the viewport
  const stars = [
    { top: '8%', left: '12%', golden: true },
    { top: '18%', left: '28%', golden: false },
    { top: '25%', left: '65%', golden: true },
    { top: '32%', left: '82%', golden: false },
    { top: '40%', left: '15%', golden: false },
    { top: '46%', left: '52%', golden: true },
    { top: '55%', left: '78%', golden: false },
    { top: '62%', left: '34%', golden: true },
    { top: '70%', left: '10%', golden: false },
    { top: '78%', left: '60%', golden: true },
    { top: '12%', left: '50%', golden: false },
    { top: '22%', left: '90%', golden: true },
    { top: '35%', left: '40%', golden: false },
    { top: '48%', left: '5%', golden: true },
    { top: '58%', left: '24%', golden: false },
    { top: '68%', left: '88%', golden: true },
  ];

  return (
    <div className="qs-star-layer" aria-hidden="true">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className={
            'qs-star' + (star.golden ? ' qs-star-golden' : '')
          }
          style={{
            top: star.top,
            left: star.left,
          }}
        />
      ))}

      {/* Two shooting stars, static elements with CSS animations */}
      <div className="qs-shooting-star" />
      <div className="qs-shooting-star qs-shooting-star-2" />
    </div>
  );
}

export default function RootWrapper(props) {
  return (
    <>
      {/* Original Docusaurus Root / app */}
      <Root {...props} />
      {/* Our static star background, rendered once per page */}
      <StaticStarfield />
    </>
  );
}