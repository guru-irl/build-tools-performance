import React from 'react';
const LABEL_761 = 'component_761';
export function Component761({ value = 761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_761, 'data-value': derived.doubled }, children);
}
export default Component761;
