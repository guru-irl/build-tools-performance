import React from 'react';
const LABEL_36125 = 'component_36125';
export function Component36125({ value = 36125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36125, 'data-value': derived.doubled }, children);
}
export default Component36125;
