import React from 'react';
const LABEL_36469 = 'component_36469';
export function Component36469({ value = 36469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36469, 'data-value': derived.doubled }, children);
}
export default Component36469;
