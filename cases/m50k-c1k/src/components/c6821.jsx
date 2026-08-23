import React from 'react';
const LABEL_6821 = 'component_6821';
export function Component6821({ value = 6821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6821, 'data-value': derived.doubled }, children);
}
export default Component6821;
