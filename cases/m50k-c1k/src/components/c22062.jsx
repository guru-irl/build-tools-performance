import React from 'react';
const LABEL_22062 = 'component_22062';
export function Component22062({ value = 22062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22062, 'data-value': derived.doubled }, children);
}
export default Component22062;
