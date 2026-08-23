import React from 'react';
const LABEL_21520 = 'component_21520';
export function Component21520({ value = 21520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21520, 'data-value': derived.doubled }, children);
}
export default Component21520;
