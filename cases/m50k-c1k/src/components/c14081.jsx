import React from 'react';
const LABEL_14081 = 'component_14081';
export function Component14081({ value = 14081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14081, 'data-value': derived.doubled }, children);
}
export default Component14081;
