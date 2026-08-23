import React from 'react';
const LABEL_22783 = 'component_22783';
export function Component22783({ value = 22783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22783, 'data-value': derived.doubled }, children);
}
export default Component22783;
