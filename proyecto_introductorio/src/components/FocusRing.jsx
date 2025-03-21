import React from 'react';

const FocusRing = () => {
  return (
    <a
      href="#"
      className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
      style={{ "--bs-focus-ring-color": "rgba(var(--bs-success-rgb), .25)" }}
    >
      Green focus ring
    </a>
  );
};

export default FocusRing;

