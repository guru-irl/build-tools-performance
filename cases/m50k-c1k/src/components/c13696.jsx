import React from 'react';
const LABEL_13696 = 'component_13696';
export function Component13696({ value = 13696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13696, 'data-value': derived.doubled }, children);
}
export default Component13696;
