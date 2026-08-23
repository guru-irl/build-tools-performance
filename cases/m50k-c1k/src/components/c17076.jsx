import React from 'react';
const LABEL_17076 = 'component_17076';
export function Component17076({ value = 17076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17076, 'data-value': derived.doubled }, children);
}
export default Component17076;
