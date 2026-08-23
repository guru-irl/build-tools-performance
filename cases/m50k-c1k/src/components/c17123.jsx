import React from 'react';
const LABEL_17123 = 'component_17123';
export function Component17123({ value = 17123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17123, 'data-value': derived.doubled }, children);
}
export default Component17123;
