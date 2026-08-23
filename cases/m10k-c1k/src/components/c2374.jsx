import React from 'react';
const LABEL_2374 = 'component_2374';
export function Component2374({ value = 2374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2374, 'data-value': derived.doubled }, children);
}
export default Component2374;
