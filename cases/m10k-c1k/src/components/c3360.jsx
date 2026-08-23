import React from 'react';
const LABEL_3360 = 'component_3360';
export function Component3360({ value = 3360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3360, 'data-value': derived.doubled }, children);
}
export default Component3360;
