import React from 'react';
const LABEL_726 = 'component_726';
export function Component726({ value = 726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_726, 'data-value': derived.doubled }, children);
}
export default Component726;
