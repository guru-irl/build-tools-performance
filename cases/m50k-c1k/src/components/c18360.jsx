import React from 'react';
const LABEL_18360 = 'component_18360';
export function Component18360({ value = 18360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18360, 'data-value': derived.doubled }, children);
}
export default Component18360;
