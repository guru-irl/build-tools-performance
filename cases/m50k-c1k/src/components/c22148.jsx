import React from 'react';
const LABEL_22148 = 'component_22148';
export function Component22148({ value = 22148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22148, 'data-value': derived.doubled }, children);
}
export default Component22148;
