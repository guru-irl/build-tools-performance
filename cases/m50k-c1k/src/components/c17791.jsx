import React from 'react';
const LABEL_17791 = 'component_17791';
export function Component17791({ value = 17791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17791, 'data-value': derived.doubled }, children);
}
export default Component17791;
