import React from 'react';
const LABEL_18163 = 'component_18163';
export function Component18163({ value = 18163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18163, 'data-value': derived.doubled }, children);
}
export default Component18163;
