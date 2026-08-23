import React from 'react';
const LABEL_23463 = 'component_23463';
export function Component23463({ value = 23463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23463, 'data-value': derived.doubled }, children);
}
export default Component23463;
