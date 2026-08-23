import React from 'react';
const LABEL_17631 = 'component_17631';
export function Component17631({ value = 17631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17631, 'data-value': derived.doubled }, children);
}
export default Component17631;
