import React from 'react';
const LABEL_17445 = 'component_17445';
export function Component17445({ value = 17445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17445, 'data-value': derived.doubled }, children);
}
export default Component17445;
