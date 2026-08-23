import React from 'react';
const LABEL_1678 = 'component_1678';
export function Component1678({ value = 1678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1678, 'data-value': derived.doubled }, children);
}
export default Component1678;
