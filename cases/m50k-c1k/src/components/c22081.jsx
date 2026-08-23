import React from 'react';
const LABEL_22081 = 'component_22081';
export function Component22081({ value = 22081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22081, 'data-value': derived.doubled }, children);
}
export default Component22081;
