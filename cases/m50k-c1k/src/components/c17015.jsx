import React from 'react';
const LABEL_17015 = 'component_17015';
export function Component17015({ value = 17015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17015, 'data-value': derived.doubled }, children);
}
export default Component17015;
