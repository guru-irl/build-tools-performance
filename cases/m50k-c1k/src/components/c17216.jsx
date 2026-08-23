import React from 'react';
const LABEL_17216 = 'component_17216';
export function Component17216({ value = 17216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17216, 'data-value': derived.doubled }, children);
}
export default Component17216;
