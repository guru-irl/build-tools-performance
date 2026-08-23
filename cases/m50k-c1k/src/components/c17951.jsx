import React from 'react';
const LABEL_17951 = 'component_17951';
export function Component17951({ value = 17951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17951, 'data-value': derived.doubled }, children);
}
export default Component17951;
