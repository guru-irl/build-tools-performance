import React from 'react';
const LABEL_36251 = 'component_36251';
export function Component36251({ value = 36251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36251, 'data-value': derived.doubled }, children);
}
export default Component36251;
