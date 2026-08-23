import React from 'react';
const LABEL_24495 = 'component_24495';
export function Component24495({ value = 24495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24495, 'data-value': derived.doubled }, children);
}
export default Component24495;
