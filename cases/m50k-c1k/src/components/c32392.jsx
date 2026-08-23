import React from 'react';
const LABEL_32392 = 'component_32392';
export function Component32392({ value = 32392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32392, 'data-value': derived.doubled }, children);
}
export default Component32392;
