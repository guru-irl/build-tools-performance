import React from 'react';
const LABEL_17211 = 'component_17211';
export function Component17211({ value = 17211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17211, 'data-value': derived.doubled }, children);
}
export default Component17211;
