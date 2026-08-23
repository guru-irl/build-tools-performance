import React from 'react';
const LABEL_28756 = 'component_28756';
export function Component28756({ value = 28756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28756, 'data-value': derived.doubled }, children);
}
export default Component28756;
