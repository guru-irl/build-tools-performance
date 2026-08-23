import React from 'react';
const LABEL_46055 = 'component_46055';
export function Component46055({ value = 46055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46055, 'data-value': derived.doubled }, children);
}
export default Component46055;
