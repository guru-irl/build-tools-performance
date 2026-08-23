import React from 'react';
const LABEL_17807 = 'component_17807';
export function Component17807({ value = 17807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17807, 'data-value': derived.doubled }, children);
}
export default Component17807;
