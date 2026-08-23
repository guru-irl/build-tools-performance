import React from 'react';
const LABEL_23802 = 'component_23802';
export function Component23802({ value = 23802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23802, 'data-value': derived.doubled }, children);
}
export default Component23802;
