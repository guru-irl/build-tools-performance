import React from 'react';
const LABEL_3990 = 'component_3990';
export function Component3990({ value = 3990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3990, 'data-value': derived.doubled }, children);
}
export default Component3990;
