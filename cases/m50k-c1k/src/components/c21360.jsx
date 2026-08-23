import React from 'react';
const LABEL_21360 = 'component_21360';
export function Component21360({ value = 21360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21360, 'data-value': derived.doubled }, children);
}
export default Component21360;
