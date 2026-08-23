import React from 'react';
const LABEL_3529 = 'component_3529';
export function Component3529({ value = 3529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3529, 'data-value': derived.doubled }, children);
}
export default Component3529;
