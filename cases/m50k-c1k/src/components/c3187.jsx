import React from 'react';
const LABEL_3187 = 'component_3187';
export function Component3187({ value = 3187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3187, 'data-value': derived.doubled }, children);
}
export default Component3187;
