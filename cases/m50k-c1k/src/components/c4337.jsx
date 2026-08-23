import React from 'react';
const LABEL_4337 = 'component_4337';
export function Component4337({ value = 4337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4337, 'data-value': derived.doubled }, children);
}
export default Component4337;
