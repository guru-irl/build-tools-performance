import React from 'react';
const LABEL_2163 = 'component_2163';
export function Component2163({ value = 2163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2163, 'data-value': derived.doubled }, children);
}
export default Component2163;
