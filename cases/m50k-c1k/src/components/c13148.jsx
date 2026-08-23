import React from 'react';
const LABEL_13148 = 'component_13148';
export function Component13148({ value = 13148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13148, 'data-value': derived.doubled }, children);
}
export default Component13148;
