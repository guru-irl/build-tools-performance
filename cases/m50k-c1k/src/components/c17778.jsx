import React from 'react';
const LABEL_17778 = 'component_17778';
export function Component17778({ value = 17778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17778, 'data-value': derived.doubled }, children);
}
export default Component17778;
