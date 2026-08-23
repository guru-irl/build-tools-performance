import React from 'react';
const LABEL_38062 = 'component_38062';
export function Component38062({ value = 38062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38062, 'data-value': derived.doubled }, children);
}
export default Component38062;
