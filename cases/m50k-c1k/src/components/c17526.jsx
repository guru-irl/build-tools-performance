import React from 'react';
const LABEL_17526 = 'component_17526';
export function Component17526({ value = 17526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17526, 'data-value': derived.doubled }, children);
}
export default Component17526;
