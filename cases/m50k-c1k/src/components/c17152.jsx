import React from 'react';
const LABEL_17152 = 'component_17152';
export function Component17152({ value = 17152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17152, 'data-value': derived.doubled }, children);
}
export default Component17152;
