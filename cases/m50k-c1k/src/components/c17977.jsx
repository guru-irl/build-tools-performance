import React from 'react';
const LABEL_17977 = 'component_17977';
export function Component17977({ value = 17977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17977, 'data-value': derived.doubled }, children);
}
export default Component17977;
