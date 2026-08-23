import React from 'react';
const LABEL_33536 = 'component_33536';
export function Component33536({ value = 33536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33536, 'data-value': derived.doubled }, children);
}
export default Component33536;
