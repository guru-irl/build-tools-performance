import React from 'react';
const LABEL_17466 = 'component_17466';
export function Component17466({ value = 17466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17466, 'data-value': derived.doubled }, children);
}
export default Component17466;
