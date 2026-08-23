import React from 'react';
const LABEL_36726 = 'component_36726';
export function Component36726({ value = 36726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36726, 'data-value': derived.doubled }, children);
}
export default Component36726;
