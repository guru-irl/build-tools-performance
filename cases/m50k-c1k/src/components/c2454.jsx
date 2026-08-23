import React from 'react';
const LABEL_2454 = 'component_2454';
export function Component2454({ value = 2454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2454, 'data-value': derived.doubled }, children);
}
export default Component2454;
