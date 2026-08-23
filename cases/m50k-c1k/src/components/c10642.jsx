import React from 'react';
const LABEL_10642 = 'component_10642';
export function Component10642({ value = 10642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10642, 'data-value': derived.doubled }, children);
}
export default Component10642;
