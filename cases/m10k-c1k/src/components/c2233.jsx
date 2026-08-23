import React from 'react';
const LABEL_2233 = 'component_2233';
export function Component2233({ value = 2233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2233, 'data-value': derived.doubled }, children);
}
export default Component2233;
