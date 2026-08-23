import React from 'react';
const LABEL_23454 = 'component_23454';
export function Component23454({ value = 23454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23454, 'data-value': derived.doubled }, children);
}
export default Component23454;
