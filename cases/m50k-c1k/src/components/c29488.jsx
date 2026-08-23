import React from 'react';
const LABEL_29488 = 'component_29488';
export function Component29488({ value = 29488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29488, 'data-value': derived.doubled }, children);
}
export default Component29488;
