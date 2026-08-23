import React from 'react';
const LABEL_10821 = 'component_10821';
export function Component10821({ value = 10821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10821, 'data-value': derived.doubled }, children);
}
export default Component10821;
