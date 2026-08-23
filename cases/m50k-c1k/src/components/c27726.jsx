import React from 'react';
const LABEL_27726 = 'component_27726';
export function Component27726({ value = 27726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27726, 'data-value': derived.doubled }, children);
}
export default Component27726;
