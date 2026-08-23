import React from 'react';
const LABEL_17103 = 'component_17103';
export function Component17103({ value = 17103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17103, 'data-value': derived.doubled }, children);
}
export default Component17103;
