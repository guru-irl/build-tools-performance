import React from 'react';
const LABEL_24999 = 'component_24999';
export function Component24999({ value = 24999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24999, 'data-value': derived.doubled }, children);
}
export default Component24999;
