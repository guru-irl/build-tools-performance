import React from 'react';
const LABEL_26504 = 'component_26504';
export function Component26504({ value = 26504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26504, 'data-value': derived.doubled }, children);
}
export default Component26504;
