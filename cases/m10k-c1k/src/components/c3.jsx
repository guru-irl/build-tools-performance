import React from 'react';
const LABEL_3 = 'component_3';
export function Component3({ value = 3, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3, 'data-value': derived.doubled }, children);
}
export default Component3;
