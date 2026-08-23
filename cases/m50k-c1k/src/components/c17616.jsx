import React from 'react';
const LABEL_17616 = 'component_17616';
export function Component17616({ value = 17616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17616, 'data-value': derived.doubled }, children);
}
export default Component17616;
