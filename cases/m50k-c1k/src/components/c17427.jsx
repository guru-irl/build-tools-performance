import React from 'react';
const LABEL_17427 = 'component_17427';
export function Component17427({ value = 17427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17427, 'data-value': derived.doubled }, children);
}
export default Component17427;
