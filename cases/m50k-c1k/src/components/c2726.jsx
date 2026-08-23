import React from 'react';
const LABEL_2726 = 'component_2726';
export function Component2726({ value = 2726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2726, 'data-value': derived.doubled }, children);
}
export default Component2726;
