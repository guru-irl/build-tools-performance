import React from 'react';
const LABEL_12383 = 'component_12383';
export function Component12383({ value = 12383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12383, 'data-value': derived.doubled }, children);
}
export default Component12383;
