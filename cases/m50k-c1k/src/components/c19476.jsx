import React from 'react';
const LABEL_19476 = 'component_19476';
export function Component19476({ value = 19476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19476, 'data-value': derived.doubled }, children);
}
export default Component19476;
