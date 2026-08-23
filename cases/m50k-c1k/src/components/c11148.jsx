import React from 'react';
const LABEL_11148 = 'component_11148';
export function Component11148({ value = 11148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11148, 'data-value': derived.doubled }, children);
}
export default Component11148;
