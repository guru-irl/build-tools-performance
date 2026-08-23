import React from 'react';
const LABEL_10478 = 'component_10478';
export function Component10478({ value = 10478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10478, 'data-value': derived.doubled }, children);
}
export default Component10478;
