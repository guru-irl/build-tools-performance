import React from 'react';
const LABEL_17010 = 'component_17010';
export function Component17010({ value = 17010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17010, 'data-value': derived.doubled }, children);
}
export default Component17010;
