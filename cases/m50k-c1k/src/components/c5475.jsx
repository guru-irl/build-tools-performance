import React from 'react';
const LABEL_5475 = 'component_5475';
export function Component5475({ value = 5475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5475, 'data-value': derived.doubled }, children);
}
export default Component5475;
