import React from 'react';
const LABEL_17752 = 'component_17752';
export function Component17752({ value = 17752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17752, 'data-value': derived.doubled }, children);
}
export default Component17752;
