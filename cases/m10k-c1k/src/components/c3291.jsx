import React from 'react';
const LABEL_3291 = 'component_3291';
export function Component3291({ value = 3291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3291, 'data-value': derived.doubled }, children);
}
export default Component3291;
