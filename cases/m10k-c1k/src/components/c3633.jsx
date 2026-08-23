import React from 'react';
const LABEL_3633 = 'component_3633';
export function Component3633({ value = 3633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3633, 'data-value': derived.doubled }, children);
}
export default Component3633;
