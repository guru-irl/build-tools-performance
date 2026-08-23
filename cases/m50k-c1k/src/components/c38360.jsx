import React from 'react';
const LABEL_38360 = 'component_38360';
export function Component38360({ value = 38360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38360, 'data-value': derived.doubled }, children);
}
export default Component38360;
