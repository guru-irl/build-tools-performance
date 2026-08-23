import React from 'react';
const LABEL_17907 = 'component_17907';
export function Component17907({ value = 17907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17907, 'data-value': derived.doubled }, children);
}
export default Component17907;
