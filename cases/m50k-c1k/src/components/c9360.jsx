import React from 'react';
const LABEL_9360 = 'component_9360';
export function Component9360({ value = 9360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9360, 'data-value': derived.doubled }, children);
}
export default Component9360;
