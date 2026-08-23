import React from 'react';
const LABEL_17454 = 'component_17454';
export function Component17454({ value = 17454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17454, 'data-value': derived.doubled }, children);
}
export default Component17454;
