import React from 'react';
const LABEL_17143 = 'component_17143';
export function Component17143({ value = 17143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17143, 'data-value': derived.doubled }, children);
}
export default Component17143;
