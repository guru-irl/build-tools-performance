import React from 'react';
const LABEL_17102 = 'component_17102';
export function Component17102({ value = 17102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17102, 'data-value': derived.doubled }, children);
}
export default Component17102;
