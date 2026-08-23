import React from 'react';
const LABEL_17930 = 'component_17930';
export function Component17930({ value = 17930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17930, 'data-value': derived.doubled }, children);
}
export default Component17930;
