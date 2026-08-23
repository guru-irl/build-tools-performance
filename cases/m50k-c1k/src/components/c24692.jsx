import React from 'react';
const LABEL_24692 = 'component_24692';
export function Component24692({ value = 24692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24692, 'data-value': derived.doubled }, children);
}
export default Component24692;
