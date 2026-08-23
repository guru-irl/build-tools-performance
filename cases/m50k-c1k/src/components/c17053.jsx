import React from 'react';
const LABEL_17053 = 'component_17053';
export function Component17053({ value = 17053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17053, 'data-value': derived.doubled }, children);
}
export default Component17053;
