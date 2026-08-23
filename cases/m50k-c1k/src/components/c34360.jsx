import React from 'react';
const LABEL_34360 = 'component_34360';
export function Component34360({ value = 34360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34360, 'data-value': derived.doubled }, children);
}
export default Component34360;
