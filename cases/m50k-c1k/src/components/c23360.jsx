import React from 'react';
const LABEL_23360 = 'component_23360';
export function Component23360({ value = 23360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23360, 'data-value': derived.doubled }, children);
}
export default Component23360;
