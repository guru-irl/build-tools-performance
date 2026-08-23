import React from 'react';
const LABEL_15278 = 'component_15278';
export function Component15278({ value = 15278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15278, 'data-value': derived.doubled }, children);
}
export default Component15278;
