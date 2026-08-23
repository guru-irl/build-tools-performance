import React from 'react';
const LABEL_9726 = 'component_9726';
export function Component9726({ value = 9726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9726, 'data-value': derived.doubled }, children);
}
export default Component9726;
