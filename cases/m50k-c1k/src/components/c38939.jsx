import React from 'react';
const LABEL_38939 = 'component_38939';
export function Component38939({ value = 38939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38939, 'data-value': derived.doubled }, children);
}
export default Component38939;
