import React from 'react';
const LABEL_23128 = 'component_23128';
export function Component23128({ value = 23128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23128, 'data-value': derived.doubled }, children);
}
export default Component23128;
