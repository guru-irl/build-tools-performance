import React from 'react';
const LABEL_26360 = 'component_26360';
export function Component26360({ value = 26360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26360, 'data-value': derived.doubled }, children);
}
export default Component26360;
