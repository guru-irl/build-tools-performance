import React from 'react';
const LABEL_35029 = 'component_35029';
export function Component35029({ value = 35029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35029, 'data-value': derived.doubled }, children);
}
export default Component35029;
