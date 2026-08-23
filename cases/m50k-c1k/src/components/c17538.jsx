import React from 'react';
const LABEL_17538 = 'component_17538';
export function Component17538({ value = 17538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17538, 'data-value': derived.doubled }, children);
}
export default Component17538;
