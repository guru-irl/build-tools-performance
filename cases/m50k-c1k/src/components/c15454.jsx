import React from 'react';
const LABEL_15454 = 'component_15454';
export function Component15454({ value = 15454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15454, 'data-value': derived.doubled }, children);
}
export default Component15454;
