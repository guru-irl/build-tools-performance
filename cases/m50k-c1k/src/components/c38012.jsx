import React from 'react';
const LABEL_38012 = 'component_38012';
export function Component38012({ value = 38012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38012, 'data-value': derived.doubled }, children);
}
export default Component38012;
