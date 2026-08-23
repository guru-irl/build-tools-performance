import React from 'react';
const LABEL_39360 = 'component_39360';
export function Component39360({ value = 39360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39360, 'data-value': derived.doubled }, children);
}
export default Component39360;
