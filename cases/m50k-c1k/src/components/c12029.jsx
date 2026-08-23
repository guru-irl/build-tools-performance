import React from 'react';
const LABEL_12029 = 'component_12029';
export function Component12029({ value = 12029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12029, 'data-value': derived.doubled }, children);
}
export default Component12029;
