import React from 'react';
const LABEL_37252 = 'component_37252';
export function Component37252({ value = 37252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37252, 'data-value': derived.doubled }, children);
}
export default Component37252;
