import React from 'react';
const LABEL_12676 = 'component_12676';
export function Component12676({ value = 12676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12676, 'data-value': derived.doubled }, children);
}
export default Component12676;
