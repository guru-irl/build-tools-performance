import React from 'react';
const LABEL_35808 = 'component_35808';
export function Component35808({ value = 35808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35808, 'data-value': derived.doubled }, children);
}
export default Component35808;
