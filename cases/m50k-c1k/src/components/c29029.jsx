import React from 'react';
const LABEL_29029 = 'component_29029';
export function Component29029({ value = 29029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29029, 'data-value': derived.doubled }, children);
}
export default Component29029;
