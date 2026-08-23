import React from 'react';
const LABEL_2830 = 'component_2830';
export function Component2830({ value = 2830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2830, 'data-value': derived.doubled }, children);
}
export default Component2830;
