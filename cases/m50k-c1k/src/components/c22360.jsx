import React from 'react';
const LABEL_22360 = 'component_22360';
export function Component22360({ value = 22360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22360, 'data-value': derived.doubled }, children);
}
export default Component22360;
