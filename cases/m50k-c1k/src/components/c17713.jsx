import React from 'react';
const LABEL_17713 = 'component_17713';
export function Component17713({ value = 17713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17713, 'data-value': derived.doubled }, children);
}
export default Component17713;
