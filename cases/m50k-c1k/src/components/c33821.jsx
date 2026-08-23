import React from 'react';
const LABEL_33821 = 'component_33821';
export function Component33821({ value = 33821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33821, 'data-value': derived.doubled }, children);
}
export default Component33821;
