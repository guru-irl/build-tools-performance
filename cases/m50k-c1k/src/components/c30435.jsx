import React from 'react';
const LABEL_30435 = 'component_30435';
export function Component30435({ value = 30435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30435, 'data-value': derived.doubled }, children);
}
export default Component30435;
