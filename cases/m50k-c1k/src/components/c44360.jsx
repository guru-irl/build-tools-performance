import React from 'react';
const LABEL_44360 = 'component_44360';
export function Component44360({ value = 44360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44360, 'data-value': derived.doubled }, children);
}
export default Component44360;
