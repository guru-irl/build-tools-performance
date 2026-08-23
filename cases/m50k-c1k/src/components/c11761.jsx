import React from 'react';
const LABEL_11761 = 'component_11761';
export function Component11761({ value = 11761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11761, 'data-value': derived.doubled }, children);
}
export default Component11761;
