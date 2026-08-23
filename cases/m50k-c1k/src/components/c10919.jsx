import React from 'react';
const LABEL_10919 = 'component_10919';
export function Component10919({ value = 10919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10919, 'data-value': derived.doubled }, children);
}
export default Component10919;
