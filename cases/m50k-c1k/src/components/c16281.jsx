import React from 'react';
const LABEL_16281 = 'component_16281';
export function Component16281({ value = 16281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16281, 'data-value': derived.doubled }, children);
}
export default Component16281;
