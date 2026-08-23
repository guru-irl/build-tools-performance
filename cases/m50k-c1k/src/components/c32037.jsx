import React from 'react';
const LABEL_32037 = 'component_32037';
export function Component32037({ value = 32037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32037, 'data-value': derived.doubled }, children);
}
export default Component32037;
