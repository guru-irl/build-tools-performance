import React from 'react';
const LABEL_13454 = 'component_13454';
export function Component13454({ value = 13454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13454, 'data-value': derived.doubled }, children);
}
export default Component13454;
