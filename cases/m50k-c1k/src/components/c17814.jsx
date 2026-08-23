import React from 'react';
const LABEL_17814 = 'component_17814';
export function Component17814({ value = 17814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17814, 'data-value': derived.doubled }, children);
}
export default Component17814;
