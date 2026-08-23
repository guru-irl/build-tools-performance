import React from 'react';
const LABEL_24074 = 'component_24074';
export function Component24074({ value = 24074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24074, 'data-value': derived.doubled }, children);
}
export default Component24074;
