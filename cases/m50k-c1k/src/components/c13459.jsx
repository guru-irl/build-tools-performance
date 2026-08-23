import React from 'react';
const LABEL_13459 = 'component_13459';
export function Component13459({ value = 13459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13459, 'data-value': derived.doubled }, children);
}
export default Component13459;
