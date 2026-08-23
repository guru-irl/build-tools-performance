import React from 'react';
const LABEL_38726 = 'component_38726';
export function Component38726({ value = 38726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38726, 'data-value': derived.doubled }, children);
}
export default Component38726;
