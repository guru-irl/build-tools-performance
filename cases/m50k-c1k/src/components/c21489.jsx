import React from 'react';
const LABEL_21489 = 'component_21489';
export function Component21489({ value = 21489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21489, 'data-value': derived.doubled }, children);
}
export default Component21489;
