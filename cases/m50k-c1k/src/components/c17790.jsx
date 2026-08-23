import React from 'react';
const LABEL_17790 = 'component_17790';
export function Component17790({ value = 17790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17790, 'data-value': derived.doubled }, children);
}
export default Component17790;
