import React from 'react';
const LABEL_2213 = 'component_2213';
export function Component2213({ value = 2213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2213, 'data-value': derived.doubled }, children);
}
export default Component2213;
