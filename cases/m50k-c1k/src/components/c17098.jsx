import React from 'react';
const LABEL_17098 = 'component_17098';
export function Component17098({ value = 17098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17098, 'data-value': derived.doubled }, children);
}
export default Component17098;
