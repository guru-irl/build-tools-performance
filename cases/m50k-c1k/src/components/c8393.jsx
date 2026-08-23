import React from 'react';
const LABEL_8393 = 'component_8393';
export function Component8393({ value = 8393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8393, 'data-value': derived.doubled }, children);
}
export default Component8393;
