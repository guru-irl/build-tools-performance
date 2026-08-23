import React from 'react';
const LABEL_2990 = 'component_2990';
export function Component2990({ value = 2990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2990, 'data-value': derived.doubled }, children);
}
export default Component2990;
