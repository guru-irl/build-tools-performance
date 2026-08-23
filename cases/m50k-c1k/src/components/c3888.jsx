import React from 'react';
const LABEL_3888 = 'component_3888';
export function Component3888({ value = 3888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3888, 'data-value': derived.doubled }, children);
}
export default Component3888;
