import React from 'react';
const LABEL_17383 = 'component_17383';
export function Component17383({ value = 17383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17383, 'data-value': derived.doubled }, children);
}
export default Component17383;
