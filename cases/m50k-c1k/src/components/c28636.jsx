import React from 'react';
const LABEL_28636 = 'component_28636';
export function Component28636({ value = 28636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28636, 'data-value': derived.doubled }, children);
}
export default Component28636;
