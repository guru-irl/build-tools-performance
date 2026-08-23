import React from 'react';
const LABEL_17874 = 'component_17874';
export function Component17874({ value = 17874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17874, 'data-value': derived.doubled }, children);
}
export default Component17874;
