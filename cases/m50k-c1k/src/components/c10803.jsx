import React from 'react';
const LABEL_10803 = 'component_10803';
export function Component10803({ value = 10803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10803, 'data-value': derived.doubled }, children);
}
export default Component10803;
