import React from 'react';
const LABEL_17453 = 'component_17453';
export function Component17453({ value = 17453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17453, 'data-value': derived.doubled }, children);
}
export default Component17453;
