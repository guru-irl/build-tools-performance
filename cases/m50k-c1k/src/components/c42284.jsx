import React from 'react';
const LABEL_42284 = 'component_42284';
export function Component42284({ value = 42284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42284, 'data-value': derived.doubled }, children);
}
export default Component42284;
