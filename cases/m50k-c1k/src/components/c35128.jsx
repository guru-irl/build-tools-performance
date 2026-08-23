import React from 'react';
const LABEL_35128 = 'component_35128';
export function Component35128({ value = 35128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35128, 'data-value': derived.doubled }, children);
}
export default Component35128;
