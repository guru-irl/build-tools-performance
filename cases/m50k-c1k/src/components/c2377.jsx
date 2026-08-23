import React from 'react';
const LABEL_2377 = 'component_2377';
export function Component2377({ value = 2377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2377, 'data-value': derived.doubled }, children);
}
export default Component2377;
