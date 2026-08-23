import React from 'react';
const LABEL_26474 = 'component_26474';
export function Component26474({ value = 26474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26474, 'data-value': derived.doubled }, children);
}
export default Component26474;
