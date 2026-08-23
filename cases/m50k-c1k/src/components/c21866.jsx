import React from 'react';
const LABEL_21866 = 'component_21866';
export function Component21866({ value = 21866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21866, 'data-value': derived.doubled }, children);
}
export default Component21866;
