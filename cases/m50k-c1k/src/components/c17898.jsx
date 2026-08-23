import React from 'react';
const LABEL_17898 = 'component_17898';
export function Component17898({ value = 17898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17898, 'data-value': derived.doubled }, children);
}
export default Component17898;
