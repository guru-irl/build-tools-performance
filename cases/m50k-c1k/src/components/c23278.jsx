import React from 'react';
const LABEL_23278 = 'component_23278';
export function Component23278({ value = 23278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23278, 'data-value': derived.doubled }, children);
}
export default Component23278;
