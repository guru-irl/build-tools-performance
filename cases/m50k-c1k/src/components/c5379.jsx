import React from 'react';
const LABEL_5379 = 'component_5379';
export function Component5379({ value = 5379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5379, 'data-value': derived.doubled }, children);
}
export default Component5379;
