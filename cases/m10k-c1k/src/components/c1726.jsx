import React from 'react';
const LABEL_1726 = 'component_1726';
export function Component1726({ value = 1726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1726, 'data-value': derived.doubled }, children);
}
export default Component1726;
