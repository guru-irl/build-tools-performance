import React from 'react';
const LABEL_5264 = 'component_5264';
export function Component5264({ value = 5264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5264, 'data-value': derived.doubled }, children);
}
export default Component5264;
