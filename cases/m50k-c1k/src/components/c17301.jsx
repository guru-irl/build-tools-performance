import React from 'react';
const LABEL_17301 = 'component_17301';
export function Component17301({ value = 17301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17301, 'data-value': derived.doubled }, children);
}
export default Component17301;
