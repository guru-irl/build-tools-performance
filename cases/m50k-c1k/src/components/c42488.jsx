import React from 'react';
const LABEL_42488 = 'component_42488';
export function Component42488({ value = 42488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42488, 'data-value': derived.doubled }, children);
}
export default Component42488;
