import React from 'react';
const LABEL_42065 = 'component_42065';
export function Component42065({ value = 42065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42065, 'data-value': derived.doubled }, children);
}
export default Component42065;
