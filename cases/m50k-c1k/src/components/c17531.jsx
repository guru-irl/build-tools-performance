import React from 'react';
const LABEL_17531 = 'component_17531';
export function Component17531({ value = 17531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17531, 'data-value': derived.doubled }, children);
}
export default Component17531;
