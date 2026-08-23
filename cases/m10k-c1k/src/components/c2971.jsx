import React from 'react';
const LABEL_2971 = 'component_2971';
export function Component2971({ value = 2971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2971, 'data-value': derived.doubled }, children);
}
export default Component2971;
