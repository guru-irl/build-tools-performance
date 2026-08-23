import React from 'react';
const LABEL_6101 = 'component_6101';
export function Component6101({ value = 6101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6101, 'data-value': derived.doubled }, children);
}
export default Component6101;
