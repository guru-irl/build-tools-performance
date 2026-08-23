import React from 'react';
const LABEL_29116 = 'component_29116';
export function Component29116({ value = 29116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29116, 'data-value': derived.doubled }, children);
}
export default Component29116;
