import React from 'react';
const LABEL_10202 = 'component_10202';
export function Component10202({ value = 10202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10202, 'data-value': derived.doubled }, children);
}
export default Component10202;
