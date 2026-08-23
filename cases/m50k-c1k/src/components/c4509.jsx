import React from 'react';
const LABEL_4509 = 'component_4509';
export function Component4509({ value = 4509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4509, 'data-value': derived.doubled }, children);
}
export default Component4509;
