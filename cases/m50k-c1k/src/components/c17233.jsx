import React from 'react';
const LABEL_17233 = 'component_17233';
export function Component17233({ value = 17233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17233, 'data-value': derived.doubled }, children);
}
export default Component17233;
