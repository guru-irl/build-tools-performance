import React from 'react';
const LABEL_6236 = 'component_6236';
export function Component6236({ value = 6236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6236, 'data-value': derived.doubled }, children);
}
export default Component6236;
