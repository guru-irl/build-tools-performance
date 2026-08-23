import React from 'react';
const LABEL_2809 = 'component_2809';
export function Component2809({ value = 2809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2809, 'data-value': derived.doubled }, children);
}
export default Component2809;
