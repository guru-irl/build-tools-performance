import React from 'react';
const LABEL_36606 = 'component_36606';
export function Component36606({ value = 36606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36606, 'data-value': derived.doubled }, children);
}
export default Component36606;
