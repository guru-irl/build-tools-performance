import React from 'react';
const LABEL_17625 = 'component_17625';
export function Component17625({ value = 17625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17625, 'data-value': derived.doubled }, children);
}
export default Component17625;
