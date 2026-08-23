import React from 'react';
const LABEL_20359 = 'component_20359';
export function Component20359({ value = 20359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20359, 'data-value': derived.doubled }, children);
}
export default Component20359;
