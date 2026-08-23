import React from 'react';
const LABEL_17958 = 'component_17958';
export function Component17958({ value = 17958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17958, 'data-value': derived.doubled }, children);
}
export default Component17958;
