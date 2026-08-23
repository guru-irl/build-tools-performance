import React from 'react';
const LABEL_3906 = 'component_3906';
export function Component3906({ value = 3906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3906, 'data-value': derived.doubled }, children);
}
export default Component3906;
