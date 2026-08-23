import React from 'react';
const LABEL_3168 = 'component_3168';
export function Component3168({ value = 3168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3168, 'data-value': derived.doubled }, children);
}
export default Component3168;
