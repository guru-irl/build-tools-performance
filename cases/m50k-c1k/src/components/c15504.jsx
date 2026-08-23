import React from 'react';
const LABEL_15504 = 'component_15504';
export function Component15504({ value = 15504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15504, 'data-value': derived.doubled }, children);
}
export default Component15504;
