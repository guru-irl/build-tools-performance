import React from 'react';
const LABEL_31638 = 'component_31638';
export function Component31638({ value = 31638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31638, 'data-value': derived.doubled }, children);
}
export default Component31638;
