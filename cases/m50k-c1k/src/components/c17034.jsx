import React from 'react';
const LABEL_17034 = 'component_17034';
export function Component17034({ value = 17034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17034, 'data-value': derived.doubled }, children);
}
export default Component17034;
