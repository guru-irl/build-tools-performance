import React from 'react';
const LABEL_23667 = 'component_23667';
export function Component23667({ value = 23667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23667, 'data-value': derived.doubled }, children);
}
export default Component23667;
