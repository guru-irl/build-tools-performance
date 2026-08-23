import React from 'react';
const LABEL_12113 = 'component_12113';
export function Component12113({ value = 12113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12113, 'data-value': derived.doubled }, children);
}
export default Component12113;
