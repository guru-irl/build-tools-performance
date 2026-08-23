import React from 'react';
const LABEL_17109 = 'component_17109';
export function Component17109({ value = 17109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17109, 'data-value': derived.doubled }, children);
}
export default Component17109;
