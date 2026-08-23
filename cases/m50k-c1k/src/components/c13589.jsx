import React from 'react';
const LABEL_13589 = 'component_13589';
export function Component13589({ value = 13589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13589, 'data-value': derived.doubled }, children);
}
export default Component13589;
