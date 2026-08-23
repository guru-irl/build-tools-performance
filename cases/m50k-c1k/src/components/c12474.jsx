import React from 'react';
const LABEL_12474 = 'component_12474';
export function Component12474({ value = 12474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12474, 'data-value': derived.doubled }, children);
}
export default Component12474;
