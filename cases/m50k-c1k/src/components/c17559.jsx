import React from 'react';
const LABEL_17559 = 'component_17559';
export function Component17559({ value = 17559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17559, 'data-value': derived.doubled }, children);
}
export default Component17559;
