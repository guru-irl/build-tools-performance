import React from 'react';
const LABEL_26821 = 'component_26821';
export function Component26821({ value = 26821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26821, 'data-value': derived.doubled }, children);
}
export default Component26821;
