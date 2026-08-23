import React from 'react';
const LABEL_29643 = 'component_29643';
export function Component29643({ value = 29643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29643, 'data-value': derived.doubled }, children);
}
export default Component29643;
