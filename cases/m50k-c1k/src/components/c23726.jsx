import React from 'react';
const LABEL_23726 = 'component_23726';
export function Component23726({ value = 23726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23726, 'data-value': derived.doubled }, children);
}
export default Component23726;
