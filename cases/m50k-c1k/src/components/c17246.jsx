import React from 'react';
const LABEL_17246 = 'component_17246';
export function Component17246({ value = 17246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17246, 'data-value': derived.doubled }, children);
}
export default Component17246;
