import React from 'react';
const LABEL_4605 = 'component_4605';
export function Component4605({ value = 4605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4605, 'data-value': derived.doubled }, children);
}
export default Component4605;
