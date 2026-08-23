import React from 'react';
const LABEL_39821 = 'component_39821';
export function Component39821({ value = 39821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39821, 'data-value': derived.doubled }, children);
}
export default Component39821;
