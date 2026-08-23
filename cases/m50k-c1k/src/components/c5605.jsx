import React from 'react';
const LABEL_5605 = 'component_5605';
export function Component5605({ value = 5605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5605, 'data-value': derived.doubled }, children);
}
export default Component5605;
