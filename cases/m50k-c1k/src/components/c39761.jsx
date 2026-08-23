import React from 'react';
const LABEL_39761 = 'component_39761';
export function Component39761({ value = 39761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39761, 'data-value': derived.doubled }, children);
}
export default Component39761;
