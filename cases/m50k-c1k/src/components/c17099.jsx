import React from 'react';
const LABEL_17099 = 'component_17099';
export function Component17099({ value = 17099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17099, 'data-value': derived.doubled }, children);
}
export default Component17099;
