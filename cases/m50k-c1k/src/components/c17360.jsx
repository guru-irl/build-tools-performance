import React from 'react';
const LABEL_17360 = 'component_17360';
export function Component17360({ value = 17360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17360, 'data-value': derived.doubled }, children);
}
export default Component17360;
