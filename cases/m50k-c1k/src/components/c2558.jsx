import React from 'react';
const LABEL_2558 = 'component_2558';
export function Component2558({ value = 2558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2558, 'data-value': derived.doubled }, children);
}
export default Component2558;
