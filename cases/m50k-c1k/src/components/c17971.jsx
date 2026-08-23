import React from 'react';
const LABEL_17971 = 'component_17971';
export function Component17971({ value = 17971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17971, 'data-value': derived.doubled }, children);
}
export default Component17971;
