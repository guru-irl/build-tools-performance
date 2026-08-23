import React from 'react';
const LABEL_26642 = 'component_26642';
export function Component26642({ value = 26642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26642, 'data-value': derived.doubled }, children);
}
export default Component26642;
