import React from 'react';
const LABEL_17568 = 'component_17568';
export function Component17568({ value = 17568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17568, 'data-value': derived.doubled }, children);
}
export default Component17568;
