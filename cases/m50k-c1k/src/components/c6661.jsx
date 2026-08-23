import React from 'react';
const LABEL_6661 = 'component_6661';
export function Component6661({ value = 6661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6661, 'data-value': derived.doubled }, children);
}
export default Component6661;
