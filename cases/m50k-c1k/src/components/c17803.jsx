import React from 'react';
const LABEL_17803 = 'component_17803';
export function Component17803({ value = 17803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17803, 'data-value': derived.doubled }, children);
}
export default Component17803;
