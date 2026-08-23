import React from 'react';
const LABEL_36821 = 'component_36821';
export function Component36821({ value = 36821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36821, 'data-value': derived.doubled }, children);
}
export default Component36821;
