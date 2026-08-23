import React from 'react';
const LABEL_17584 = 'component_17584';
export function Component17584({ value = 17584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17584, 'data-value': derived.doubled }, children);
}
export default Component17584;
