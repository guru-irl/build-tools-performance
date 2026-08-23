import React from 'react';
const LABEL_25360 = 'component_25360';
export function Component25360({ value = 25360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25360, 'data-value': derived.doubled }, children);
}
export default Component25360;
