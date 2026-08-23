import React from 'react';
const LABEL_6360 = 'component_6360';
export function Component6360({ value = 6360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6360, 'data-value': derived.doubled }, children);
}
export default Component6360;
