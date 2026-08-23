import React from 'react';
const LABEL_2093 = 'component_2093';
export function Component2093({ value = 2093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2093, 'data-value': derived.doubled }, children);
}
export default Component2093;
