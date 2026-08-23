import React from 'react';
const LABEL_17483 = 'component_17483';
export function Component17483({ value = 17483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17483, 'data-value': derived.doubled }, children);
}
export default Component17483;
