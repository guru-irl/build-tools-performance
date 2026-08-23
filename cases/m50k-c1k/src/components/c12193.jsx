import React from 'react';
const LABEL_12193 = 'component_12193';
export function Component12193({ value = 12193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12193, 'data-value': derived.doubled }, children);
}
export default Component12193;
