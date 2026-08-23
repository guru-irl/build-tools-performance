import React from 'react';
const LABEL_23504 = 'component_23504';
export function Component23504({ value = 23504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23504, 'data-value': derived.doubled }, children);
}
export default Component23504;
