import React from 'react';
const LABEL_29148 = 'component_29148';
export function Component29148({ value = 29148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29148, 'data-value': derived.doubled }, children);
}
export default Component29148;
