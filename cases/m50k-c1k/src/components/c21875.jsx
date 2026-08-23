import React from 'react';
const LABEL_21875 = 'component_21875';
export function Component21875({ value = 21875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21875, 'data-value': derived.doubled }, children);
}
export default Component21875;
