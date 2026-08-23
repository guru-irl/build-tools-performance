import React from 'react';
const LABEL_2148 = 'component_2148';
export function Component2148({ value = 2148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2148, 'data-value': derived.doubled }, children);
}
export default Component2148;
