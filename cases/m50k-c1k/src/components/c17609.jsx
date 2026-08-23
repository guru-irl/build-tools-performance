import React from 'react';
const LABEL_17609 = 'component_17609';
export function Component17609({ value = 17609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17609, 'data-value': derived.doubled }, children);
}
export default Component17609;
