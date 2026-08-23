import React from 'react';
const LABEL_24915 = 'component_24915';
export function Component24915({ value = 24915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24915, 'data-value': derived.doubled }, children);
}
export default Component24915;
