import React from 'react';
const LABEL_5720 = 'component_5720';
export function Component5720({ value = 5720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5720, 'data-value': derived.doubled }, children);
}
export default Component5720;
