import React from 'react';
const LABEL_14074 = 'component_14074';
export function Component14074({ value = 14074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14074, 'data-value': derived.doubled }, children);
}
export default Component14074;
