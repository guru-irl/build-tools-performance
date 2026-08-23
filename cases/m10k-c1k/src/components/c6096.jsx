import React from 'react';
const LABEL_6096 = 'component_6096';
export function Component6096({ value = 6096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6096, 'data-value': derived.doubled }, children);
}
export default Component6096;
