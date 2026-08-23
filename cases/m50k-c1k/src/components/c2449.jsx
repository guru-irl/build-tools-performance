import React from 'react';
const LABEL_2449 = 'component_2449';
export function Component2449({ value = 2449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2449, 'data-value': derived.doubled }, children);
}
export default Component2449;
