import React from 'react';
const LABEL_4488 = 'component_4488';
export function Component4488({ value = 4488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4488, 'data-value': derived.doubled }, children);
}
export default Component4488;
