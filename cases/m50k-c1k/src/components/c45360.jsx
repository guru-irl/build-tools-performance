import React from 'react';
const LABEL_45360 = 'component_45360';
export function Component45360({ value = 45360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45360, 'data-value': derived.doubled }, children);
}
export default Component45360;
