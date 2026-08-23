import React from 'react';
const LABEL_17554 = 'component_17554';
export function Component17554({ value = 17554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17554, 'data-value': derived.doubled }, children);
}
export default Component17554;
