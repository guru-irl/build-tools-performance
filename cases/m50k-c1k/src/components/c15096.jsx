import React from 'react';
const LABEL_15096 = 'component_15096';
export function Component15096({ value = 15096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15096, 'data-value': derived.doubled }, children);
}
export default Component15096;
