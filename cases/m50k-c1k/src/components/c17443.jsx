import React from 'react';
const LABEL_17443 = 'component_17443';
export function Component17443({ value = 17443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17443, 'data-value': derived.doubled }, children);
}
export default Component17443;
