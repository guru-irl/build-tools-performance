import React from 'react';
const LABEL_24159 = 'component_24159';
export function Component24159({ value = 24159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24159, 'data-value': derived.doubled }, children);
}
export default Component24159;
