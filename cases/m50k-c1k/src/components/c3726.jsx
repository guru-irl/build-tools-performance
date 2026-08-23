import React from 'react';
const LABEL_3726 = 'component_3726';
export function Component3726({ value = 3726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3726, 'data-value': derived.doubled }, children);
}
export default Component3726;
