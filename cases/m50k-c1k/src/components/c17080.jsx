import React from 'react';
const LABEL_17080 = 'component_17080';
export function Component17080({ value = 17080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17080, 'data-value': derived.doubled }, children);
}
export default Component17080;
