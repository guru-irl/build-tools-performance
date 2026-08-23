import React from 'react';
const LABEL_8488 = 'component_8488';
export function Component8488({ value = 8488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8488, 'data-value': derived.doubled }, children);
}
export default Component8488;
