import React from 'react';
const LABEL_21551 = 'component_21551';
export function Component21551({ value = 21551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21551, 'data-value': derived.doubled }, children);
}
export default Component21551;
