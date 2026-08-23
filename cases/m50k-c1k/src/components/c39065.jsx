import React from 'react';
const LABEL_39065 = 'component_39065';
export function Component39065({ value = 39065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39065, 'data-value': derived.doubled }, children);
}
export default Component39065;
