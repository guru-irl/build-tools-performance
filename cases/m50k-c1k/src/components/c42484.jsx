import React from 'react';
const LABEL_42484 = 'component_42484';
export function Component42484({ value = 42484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42484, 'data-value': derived.doubled }, children);
}
export default Component42484;
