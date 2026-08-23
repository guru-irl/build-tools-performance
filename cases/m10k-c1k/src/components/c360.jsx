import React from 'react';
const LABEL_360 = 'component_360';
export function Component360({ value = 360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_360, 'data-value': derived.doubled }, children);
}
export default Component360;
