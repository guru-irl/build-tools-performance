import React from 'react';
const LABEL_32278 = 'component_32278';
export function Component32278({ value = 32278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32278, 'data-value': derived.doubled }, children);
}
export default Component32278;
