import React from 'react';
const LABEL_5829 = 'component_5829';
export function Component5829({ value = 5829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5829, 'data-value': derived.doubled }, children);
}
export default Component5829;
