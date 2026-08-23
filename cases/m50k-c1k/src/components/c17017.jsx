import React from 'react';
const LABEL_17017 = 'component_17017';
export function Component17017({ value = 17017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17017, 'data-value': derived.doubled }, children);
}
export default Component17017;
