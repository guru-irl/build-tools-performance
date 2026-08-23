import React from 'react';
const LABEL_17708 = 'component_17708';
export function Component17708({ value = 17708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17708, 'data-value': derived.doubled }, children);
}
export default Component17708;
