import React from 'react';
const LABEL_20821 = 'component_20821';
export function Component20821({ value = 20821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20821, 'data-value': derived.doubled }, children);
}
export default Component20821;
