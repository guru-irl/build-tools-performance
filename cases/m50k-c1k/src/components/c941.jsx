import React from 'react';
const LABEL_941 = 'component_941';
export function Component941({ value = 941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_941, 'data-value': derived.doubled }, children);
}
export default Component941;
