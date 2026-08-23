import React from 'react';
const LABEL_11360 = 'component_11360';
export function Component11360({ value = 11360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11360, 'data-value': derived.doubled }, children);
}
export default Component11360;
