import React from 'react';
const LABEL_17649 = 'component_17649';
export function Component17649({ value = 17649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17649, 'data-value': derived.doubled }, children);
}
export default Component17649;
