import React from 'react';
const LABEL_32360 = 'component_32360';
export function Component32360({ value = 32360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32360, 'data-value': derived.doubled }, children);
}
export default Component32360;
