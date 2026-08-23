import React from 'react';
const LABEL_5990 = 'component_5990';
export function Component5990({ value = 5990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5990, 'data-value': derived.doubled }, children);
}
export default Component5990;
