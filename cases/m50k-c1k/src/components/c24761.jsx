import React from 'react';
const LABEL_24761 = 'component_24761';
export function Component24761({ value = 24761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24761, 'data-value': derived.doubled }, children);
}
export default Component24761;
