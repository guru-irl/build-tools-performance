import React from 'react';
const LABEL_17585 = 'component_17585';
export function Component17585({ value = 17585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17585, 'data-value': derived.doubled }, children);
}
export default Component17585;
