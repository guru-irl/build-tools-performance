import React from 'react';
const LABEL_21370 = 'component_21370';
export function Component21370({ value = 21370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21370, 'data-value': derived.doubled }, children);
}
export default Component21370;
