import React from 'react';
const LABEL_17749 = 'component_17749';
export function Component17749({ value = 17749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17749, 'data-value': derived.doubled }, children);
}
export default Component17749;
