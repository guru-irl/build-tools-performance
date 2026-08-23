import React from 'react';
const LABEL_24715 = 'component_24715';
export function Component24715({ value = 24715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24715, 'data-value': derived.doubled }, children);
}
export default Component24715;
