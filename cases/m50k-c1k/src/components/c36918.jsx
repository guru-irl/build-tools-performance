import React from 'react';
const LABEL_36918 = 'component_36918';
export function Component36918({ value = 36918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36918, 'data-value': derived.doubled }, children);
}
export default Component36918;
