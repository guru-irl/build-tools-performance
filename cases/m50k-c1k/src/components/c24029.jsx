import React from 'react';
const LABEL_24029 = 'component_24029';
export function Component24029({ value = 24029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24029, 'data-value': derived.doubled }, children);
}
export default Component24029;
