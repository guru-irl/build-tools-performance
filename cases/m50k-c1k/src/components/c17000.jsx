import React from 'react';
const LABEL_17000 = 'component_17000';
export function Component17000({ value = 17000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17000, 'data-value': derived.doubled }, children);
}
export default Component17000;
