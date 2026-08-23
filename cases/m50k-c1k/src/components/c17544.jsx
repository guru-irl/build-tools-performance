import React from 'react';
const LABEL_17544 = 'component_17544';
export function Component17544({ value = 17544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17544, 'data-value': derived.doubled }, children);
}
export default Component17544;
