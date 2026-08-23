import React from 'react';
const LABEL_21726 = 'component_21726';
export function Component21726({ value = 21726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21726, 'data-value': derived.doubled }, children);
}
export default Component21726;
