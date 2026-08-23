import React from 'react';
const LABEL_16794 = 'component_16794';
export function Component16794({ value = 16794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16794, 'data-value': derived.doubled }, children);
}
export default Component16794;
