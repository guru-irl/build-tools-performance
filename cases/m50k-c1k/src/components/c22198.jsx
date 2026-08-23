import React from 'react';
const LABEL_22198 = 'component_22198';
export function Component22198({ value = 22198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22198, 'data-value': derived.doubled }, children);
}
export default Component22198;
