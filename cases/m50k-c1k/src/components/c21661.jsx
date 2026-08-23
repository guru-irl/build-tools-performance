import React from 'react';
const LABEL_21661 = 'component_21661';
export function Component21661({ value = 21661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21661, 'data-value': derived.doubled }, children);
}
export default Component21661;
