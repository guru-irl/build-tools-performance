import React from 'react';
const LABEL_5393 = 'component_5393';
export function Component5393({ value = 5393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5393, 'data-value': derived.doubled }, children);
}
export default Component5393;
