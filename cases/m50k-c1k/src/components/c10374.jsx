import React from 'react';
const LABEL_10374 = 'component_10374';
export function Component10374({ value = 10374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10374, 'data-value': derived.doubled }, children);
}
export default Component10374;
