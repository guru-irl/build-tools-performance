import React from 'react';
const LABEL_23990 = 'component_23990';
export function Component23990({ value = 23990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23990, 'data-value': derived.doubled }, children);
}
export default Component23990;
