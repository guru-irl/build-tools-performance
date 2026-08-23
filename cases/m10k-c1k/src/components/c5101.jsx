import React from 'react';
const LABEL_5101 = 'component_5101';
export function Component5101({ value = 5101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5101, 'data-value': derived.doubled }, children);
}
export default Component5101;
