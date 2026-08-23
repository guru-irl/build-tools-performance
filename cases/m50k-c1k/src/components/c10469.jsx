import React from 'react';
const LABEL_10469 = 'component_10469';
export function Component10469({ value = 10469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10469, 'data-value': derived.doubled }, children);
}
export default Component10469;
