import React from 'react';
const LABEL_42360 = 'component_42360';
export function Component42360({ value = 42360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42360, 'data-value': derived.doubled }, children);
}
export default Component42360;
