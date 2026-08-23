import React from 'react';
const LABEL_17734 = 'component_17734';
export function Component17734({ value = 17734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17734, 'data-value': derived.doubled }, children);
}
export default Component17734;
