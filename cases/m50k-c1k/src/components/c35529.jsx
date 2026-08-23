import React from 'react';
const LABEL_35529 = 'component_35529';
export function Component35529({ value = 35529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35529, 'data-value': derived.doubled }, children);
}
export default Component35529;
