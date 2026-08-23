import React from 'react';
const LABEL_17121 = 'component_17121';
export function Component17121({ value = 17121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17121, 'data-value': derived.doubled }, children);
}
export default Component17121;
