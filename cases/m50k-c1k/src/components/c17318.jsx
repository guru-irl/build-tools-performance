import React from 'react';
const LABEL_17318 = 'component_17318';
export function Component17318({ value = 17318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17318, 'data-value': derived.doubled }, children);
}
export default Component17318;
