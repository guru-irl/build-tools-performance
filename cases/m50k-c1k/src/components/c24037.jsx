import React from 'react';
const LABEL_24037 = 'component_24037';
export function Component24037({ value = 24037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24037, 'data-value': derived.doubled }, children);
}
export default Component24037;
