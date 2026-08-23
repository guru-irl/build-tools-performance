import React from 'react';
const LABEL_4096 = 'component_4096';
export function Component4096({ value = 4096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4096, 'data-value': derived.doubled }, children);
}
export default Component4096;
