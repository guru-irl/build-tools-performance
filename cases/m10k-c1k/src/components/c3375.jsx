import React from 'react';
const LABEL_3375 = 'component_3375';
export function Component3375({ value = 3375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3375, 'data-value': derived.doubled }, children);
}
export default Component3375;
