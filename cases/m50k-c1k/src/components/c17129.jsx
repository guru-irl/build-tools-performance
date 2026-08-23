import React from 'react';
const LABEL_17129 = 'component_17129';
export function Component17129({ value = 17129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17129, 'data-value': derived.doubled }, children);
}
export default Component17129;
