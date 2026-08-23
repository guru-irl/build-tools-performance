import React from 'react';
const LABEL_43821 = 'component_43821';
export function Component43821({ value = 43821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43821, 'data-value': derived.doubled }, children);
}
export default Component43821;
