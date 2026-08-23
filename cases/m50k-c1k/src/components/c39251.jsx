import React from 'react';
const LABEL_39251 = 'component_39251';
export function Component39251({ value = 39251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39251, 'data-value': derived.doubled }, children);
}
export default Component39251;
