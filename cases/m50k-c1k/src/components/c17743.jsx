import React from 'react';
const LABEL_17743 = 'component_17743';
export function Component17743({ value = 17743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17743, 'data-value': derived.doubled }, children);
}
export default Component17743;
