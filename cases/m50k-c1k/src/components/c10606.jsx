import React from 'react';
const LABEL_10606 = 'component_10606';
export function Component10606({ value = 10606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10606, 'data-value': derived.doubled }, children);
}
export default Component10606;
