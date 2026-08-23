import React from 'react';
const LABEL_20726 = 'component_20726';
export function Component20726({ value = 20726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20726, 'data-value': derived.doubled }, children);
}
export default Component20726;
