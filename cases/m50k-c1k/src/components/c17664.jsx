import React from 'react';
const LABEL_17664 = 'component_17664';
export function Component17664({ value = 17664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17664, 'data-value': derived.doubled }, children);
}
export default Component17664;
