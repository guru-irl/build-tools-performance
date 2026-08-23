import React from 'react';
const LABEL_38148 = 'component_38148';
export function Component38148({ value = 38148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38148, 'data-value': derived.doubled }, children);
}
export default Component38148;
