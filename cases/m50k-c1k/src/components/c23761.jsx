import React from 'react';
const LABEL_23761 = 'component_23761';
export function Component23761({ value = 23761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23761, 'data-value': derived.doubled }, children);
}
export default Component23761;
