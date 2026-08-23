import React from 'react';
const LABEL_12638 = 'component_12638';
export function Component12638({ value = 12638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12638, 'data-value': derived.doubled }, children);
}
export default Component12638;
