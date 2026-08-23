import React from 'react';
const LABEL_32589 = 'component_32589';
export function Component32589({ value = 32589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32589, 'data-value': derived.doubled }, children);
}
export default Component32589;
