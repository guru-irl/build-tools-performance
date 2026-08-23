import React from 'react';
const LABEL_17303 = 'component_17303';
export function Component17303({ value = 17303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17303, 'data-value': derived.doubled }, children);
}
export default Component17303;
