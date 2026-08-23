import React from 'react';
const LABEL_29612 = 'component_29612';
export function Component29612({ value = 29612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29612, 'data-value': derived.doubled }, children);
}
export default Component29612;
