import React from 'react';
const LABEL_32616 = 'component_32616';
export function Component32616({ value = 32616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32616, 'data-value': derived.doubled }, children);
}
export default Component32616;
