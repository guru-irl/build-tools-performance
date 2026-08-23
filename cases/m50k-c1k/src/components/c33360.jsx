import React from 'react';
const LABEL_33360 = 'component_33360';
export function Component33360({ value = 33360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33360, 'data-value': derived.doubled }, children);
}
export default Component33360;
