import React from 'react';
const LABEL_25726 = 'component_25726';
export function Component25726({ value = 25726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25726, 'data-value': derived.doubled }, children);
}
export default Component25726;
