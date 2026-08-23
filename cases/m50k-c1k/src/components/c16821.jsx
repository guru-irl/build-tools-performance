import React from 'react';
const LABEL_16821 = 'component_16821';
export function Component16821({ value = 16821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16821, 'data-value': derived.doubled }, children);
}
export default Component16821;
