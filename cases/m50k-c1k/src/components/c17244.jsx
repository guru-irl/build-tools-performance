import React from 'react';
const LABEL_17244 = 'component_17244';
export function Component17244({ value = 17244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17244, 'data-value': derived.doubled }, children);
}
export default Component17244;
