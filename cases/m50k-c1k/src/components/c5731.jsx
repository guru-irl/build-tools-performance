import React from 'react';
const LABEL_5731 = 'component_5731';
export function Component5731({ value = 5731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5731, 'data-value': derived.doubled }, children);
}
export default Component5731;
