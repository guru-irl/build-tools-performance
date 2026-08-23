import React from 'react';
const LABEL_6081 = 'component_6081';
export function Component6081({ value = 6081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6081, 'data-value': derived.doubled }, children);
}
export default Component6081;
