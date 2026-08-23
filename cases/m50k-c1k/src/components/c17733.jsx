import React from 'react';
const LABEL_17733 = 'component_17733';
export function Component17733({ value = 17733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17733, 'data-value': derived.doubled }, children);
}
export default Component17733;
