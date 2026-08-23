import React from 'react';
const LABEL_17486 = 'component_17486';
export function Component17486({ value = 17486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17486, 'data-value': derived.doubled }, children);
}
export default Component17486;
