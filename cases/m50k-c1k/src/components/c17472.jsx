import React from 'react';
const LABEL_17472 = 'component_17472';
export function Component17472({ value = 17472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17472, 'data-value': derived.doubled }, children);
}
export default Component17472;
