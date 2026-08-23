import React from 'react';
const LABEL_23642 = 'component_23642';
export function Component23642({ value = 23642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23642, 'data-value': derived.doubled }, children);
}
export default Component23642;
