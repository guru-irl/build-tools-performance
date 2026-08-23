import React from 'react';
const LABEL_10636 = 'component_10636';
export function Component10636({ value = 10636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10636, 'data-value': derived.doubled }, children);
}
export default Component10636;
