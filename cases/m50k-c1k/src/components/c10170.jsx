import React from 'react';
const LABEL_10170 = 'component_10170';
export function Component10170({ value = 10170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10170, 'data-value': derived.doubled }, children);
}
export default Component10170;
