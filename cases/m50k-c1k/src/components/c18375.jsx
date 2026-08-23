import React from 'react';
const LABEL_18375 = 'component_18375';
export function Component18375({ value = 18375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18375, 'data-value': derived.doubled }, children);
}
export default Component18375;
