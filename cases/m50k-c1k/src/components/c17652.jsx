import React from 'react';
const LABEL_17652 = 'component_17652';
export function Component17652({ value = 17652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17652, 'data-value': derived.doubled }, children);
}
export default Component17652;
