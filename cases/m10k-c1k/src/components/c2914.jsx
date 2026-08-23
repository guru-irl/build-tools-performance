import React from 'react';
const LABEL_2914 = 'component_2914';
export function Component2914({ value = 2914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2914, 'data-value': derived.doubled }, children);
}
export default Component2914;
