import React from 'react';
const LABEL_17206 = 'component_17206';
export function Component17206({ value = 17206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17206, 'data-value': derived.doubled }, children);
}
export default Component17206;
