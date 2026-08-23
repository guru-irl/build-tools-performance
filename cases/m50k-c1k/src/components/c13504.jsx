import React from 'react';
const LABEL_13504 = 'component_13504';
export function Component13504({ value = 13504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13504, 'data-value': derived.doubled }, children);
}
export default Component13504;
