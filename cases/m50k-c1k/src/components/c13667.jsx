import React from 'react';
const LABEL_13667 = 'component_13667';
export function Component13667({ value = 13667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13667, 'data-value': derived.doubled }, children);
}
export default Component13667;
