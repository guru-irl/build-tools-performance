import React from 'react';
const LABEL_8076 = 'component_8076';
export function Component8076({ value = 8076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8076, 'data-value': derived.doubled }, children);
}
export default Component8076;
