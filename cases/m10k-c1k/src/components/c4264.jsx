import React from 'react';
const LABEL_4264 = 'component_4264';
export function Component4264({ value = 4264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4264, 'data-value': derived.doubled }, children);
}
export default Component4264;
