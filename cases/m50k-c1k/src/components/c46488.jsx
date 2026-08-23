import React from 'react';
const LABEL_46488 = 'component_46488';
export function Component46488({ value = 46488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46488, 'data-value': derived.doubled }, children);
}
export default Component46488;
