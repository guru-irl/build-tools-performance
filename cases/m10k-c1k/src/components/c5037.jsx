import React from 'react';
const LABEL_5037 = 'component_5037';
export function Component5037({ value = 5037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5037, 'data-value': derived.doubled }, children);
}
export default Component5037;
