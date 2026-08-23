import React from 'react';
const LABEL_17911 = 'component_17911';
export function Component17911({ value = 17911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17911, 'data-value': derived.doubled }, children);
}
export default Component17911;
