import React from 'react';
const LABEL_17502 = 'component_17502';
export function Component17502({ value = 17502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17502, 'data-value': derived.doubled }, children);
}
export default Component17502;
