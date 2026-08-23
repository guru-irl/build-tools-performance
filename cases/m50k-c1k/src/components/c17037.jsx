import React from 'react';
const LABEL_17037 = 'component_17037';
export function Component17037({ value = 17037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17037, 'data-value': derived.doubled }, children);
}
export default Component17037;
