import React from 'react';
const LABEL_12360 = 'component_12360';
export function Component12360({ value = 12360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12360, 'data-value': derived.doubled }, children);
}
export default Component12360;
