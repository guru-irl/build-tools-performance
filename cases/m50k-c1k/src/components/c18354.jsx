import React from 'react';
const LABEL_18354 = 'component_18354';
export function Component18354({ value = 18354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18354, 'data-value': derived.doubled }, children);
}
export default Component18354;
