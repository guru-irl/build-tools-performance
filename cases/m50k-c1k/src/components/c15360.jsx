import React from 'react';
const LABEL_15360 = 'component_15360';
export function Component15360({ value = 15360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15360, 'data-value': derived.doubled }, children);
}
export default Component15360;
