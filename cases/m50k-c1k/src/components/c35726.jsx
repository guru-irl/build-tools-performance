import React from 'react';
const LABEL_35726 = 'component_35726';
export function Component35726({ value = 35726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35726, 'data-value': derived.doubled }, children);
}
export default Component35726;
