import React from 'react';
const LABEL_17280 = 'component_17280';
export function Component17280({ value = 17280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17280, 'data-value': derived.doubled }, children);
}
export default Component17280;
