import React from 'react';
const LABEL_488 = 'component_488';
export function Component488({ value = 488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_488, 'data-value': derived.doubled }, children);
}
export default Component488;
