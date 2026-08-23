import React from 'react';
const LABEL_33454 = 'component_33454';
export function Component33454({ value = 33454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33454, 'data-value': derived.doubled }, children);
}
export default Component33454;
