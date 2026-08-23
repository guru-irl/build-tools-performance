import React from 'react';
const LABEL_2199 = 'component_2199';
export function Component2199({ value = 2199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2199, 'data-value': derived.doubled }, children);
}
export default Component2199;
