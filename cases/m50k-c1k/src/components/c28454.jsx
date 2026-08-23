import React from 'react';
const LABEL_28454 = 'component_28454';
export function Component28454({ value = 28454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28454, 'data-value': derived.doubled }, children);
}
export default Component28454;
