import React from 'react';
const LABEL_5821 = 'component_5821';
export function Component5821({ value = 5821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5821, 'data-value': derived.doubled }, children);
}
export default Component5821;
