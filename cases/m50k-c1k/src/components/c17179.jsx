import React from 'react';
const LABEL_17179 = 'component_17179';
export function Component17179({ value = 17179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17179, 'data-value': derived.doubled }, children);
}
export default Component17179;
