import React from 'react';
const LABEL_16539 = 'component_16539';
export function Component16539({ value = 16539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16539, 'data-value': derived.doubled }, children);
}
export default Component16539;
