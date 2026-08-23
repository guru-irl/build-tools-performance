import React from 'react';
const LABEL_17432 = 'component_17432';
export function Component17432({ value = 17432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17432, 'data-value': derived.doubled }, children);
}
export default Component17432;
