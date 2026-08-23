import React from 'react';
const LABEL_5193 = 'component_5193';
export function Component5193({ value = 5193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5193, 'data-value': derived.doubled }, children);
}
export default Component5193;
