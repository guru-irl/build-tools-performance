import React from 'react';
const LABEL_17999 = 'component_17999';
export function Component17999({ value = 17999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17999, 'data-value': derived.doubled }, children);
}
export default Component17999;
