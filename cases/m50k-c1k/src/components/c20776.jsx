import React from 'react';
const LABEL_20776 = 'component_20776';
export function Component20776({ value = 20776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20776, 'data-value': derived.doubled }, children);
}
export default Component20776;
